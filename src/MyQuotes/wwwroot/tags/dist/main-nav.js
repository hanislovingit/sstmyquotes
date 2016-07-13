
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('main-nav', '<ul> <li> <a href="/AllQuotes">All</a> </li> <li> <a href="/FavoriteQuotes">Favorites</a> </li> <li> <a href="/ArchiveQuotes">Archive</a> </li> </ul>', 'main-nav li { display: inline-block; }', '', function(opts) {
});});