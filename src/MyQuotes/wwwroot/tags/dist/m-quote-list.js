
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('m-quote-list', '<ul> <li each="{quote in quotes}"> <m-quote data-quote="{quote}"> {quote.text} </m-quote> </li> </ul>', '', '', function(opts) {
var _this = this;

this.mixin('redux');
this.mixin('actions');
this.on('update', () => _this.quotes = _this.store.getState());

this.store.subscribe(this.update);
});});