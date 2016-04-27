using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNet.Routing;
using StructureMap;

namespace MyQuotes
{
    public class Startup
    {
        private IConfiguration _configuration;

        public Startup(IHostingEnvironment env)
        {
            IConfigurationBuilder configurationBuilder = new ConfigurationBuilder()
                .AddJsonFile("appSettings.json")
                .AddJsonFile($"appSettings.{env.EnvironmentName}.json", true);

            _configuration = configurationBuilder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddSingleton(serviceProvider => _configuration);

            // Add StructureMap as the IOC container
            Container IocContainer = new Container();
            IocContainer.Populate(services);

            // Finally return IServiceProvider.  DNX uses the
            // SturtureMap containter to resolve services.
            return IocContainer.GetInstance<IServiceProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment hostingEnvironment)
        {
            app.UseIISPlatformHandler();

            if(hostingEnvironment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseRuntimeInfoPage("/Info");
            }
            app.UseFileServer();

            app.UseMvc(configureRoutes);

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }

        private static void configureRoutes(IRouteBuilder routeBuilder)
        {
            routeBuilder.MapRoute(
                "Default", 
                "{controller=Home}/{action=Index}/{id?}");
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
