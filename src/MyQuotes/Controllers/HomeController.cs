using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NLog.Extensions.Logging;
using NLog;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyQuotes.Controllers
{
    public class HomeController : Controller
    {
        private static Logger _logger = LogManager.GetCurrentClassLogger();

        // GET: /<controller>/
        public IActionResult Index()
        {
            _logger.Info("Log msg from index action.");
            return View();
        }

        [HttpGet("api/value/{id}")]
        public int GetValue(int id)
        {
            return id;
        }
    }
}
