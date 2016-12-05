using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MyQuotes.Options;
using NLog.Extensions.Logging;
using NLog;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyQuotes.Controllers
{
    public class HomeController : Controller
    {
        private static Logger _logger = LogManager.GetCurrentClassLogger();
        private readonly IOptions<TestOptions> _options;

        public HomeController(IOptions<TestOptions> options)
        {
            _options = options;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            _logger.Info("Log msg from index action.");
            return View(_options.Value);
        }

        [HttpGet("api/value/{id}")]
        public int GetValue(int id)
        {
            return id;
        }
    }
}
