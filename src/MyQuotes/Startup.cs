using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using MyQuotes.Middleware;
using MyQuotes.Options;
using MyQuotes.Services;
using MyQuotes.Services.Interfaces;
using StructureMap;
using NLog.Extensions.Logging;

namespace MyQuotes
{
    public class Startup
    {
        private readonly IConfiguration _configuration;
        private readonly IHostingEnvironment _hostingEnvironment;

        public Startup(IHostingEnvironment env)
        {
            _configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", true)
                .AddJsonFile($"appSettings.{env.EnvironmentName}.json", true)
                .Build();

            _hostingEnvironment = env;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            // setup options with DI. Options are placeholder objects
            // for app settings.
            services.AddOptions();

            // configure TestOptions using config
            services.Configure<TestOptions>(_configuration);

            services.AddMvc();
            services.AddSingleton(serviceProvider => _configuration);
            services.AddSwaggerGen();

            // custom services
            services.AddTransient<IOperationTransient, Operation>();
            services.AddScoped<IOperationScoped, Operation>();
            services.AddSingleton<IOperationSingleton, Operation>();
            services.AddSingleton<IOperationSingletonInstance>(new Operation(Guid.Empty));
            services.AddTransient<IOperationService, OperationService>();

            // file providers
            var physicalProvider = _hostingEnvironment.ContentRootFileProvider;
            var embeddedProvider = new EmbeddedFileProvider(Assembly.GetEntryAssembly());
            var compositeProvider = new CompositeFileProvider(physicalProvider, embeddedProvider);

            // choose one file provider to use for the app and register it
            //services.AddSingleton<IFileProvider>(physicalProvider);
            //services.AddSingleton<IFileProvider>(embeddedProvider);
            services.AddSingleton<IFileProvider>(compositeProvider);

            // Add StructureMap as the IOC container
            var container = new Container();
            container.Populate(services);

            // Finally return IServiceProvider.  CoreCLR uses the
            // SturtureMap containter to resolve services.
            return container.GetInstance<IServiceProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
            IHostingEnvironment hostingEnvironment,
            ILoggerFactory loggerFactory)
        {
            // add NLog to asp.net core
            loggerFactory.AddNLog();

            app.UseRequestLogger();
            //app.UseMiddleware<RequestLoggerMiddleware>();

            if (hostingEnvironment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            // turn the following on later when we have custom error pages
            //app.UseStatusCodePagesWithRedirects("~/errors/{0}");

            var fileServerOptions = new FileServerOptions();
            fileServerOptions.StaticFileOptions.ServeUnknownFileTypes = true;
            app.UseFileServer(fileServerOptions);

            app.UseSwagger();
            app.UseSwaggerUi();

            app.UseMvc(configureRoutes);

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World from end of the pipe!");
            });

        }

        private static void configureRoutes(IRouteBuilder routeBuilder)
        {
            routeBuilder.MapRoute(
                "Default",
                "{controller=Home}/{action=Index}/{id?}");
        }

        // Entry point for the application.
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
            .UseKestrel()
            .UseContentRoot(Directory.GetCurrentDirectory())
            .UseIISIntegration()
            .UseStartup<Startup>()
            .Build();

            host.Run();
        }
    }
}
