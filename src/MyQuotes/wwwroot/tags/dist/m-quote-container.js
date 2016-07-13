
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('m-quote-container', '<button onclick="{showNewQuoteForm}"> Add new Quote </button> <m-quote-form></m-quote-form> <m-quote-list></m-quote-list>', '', '', function(opts) {
var _this = this;

this.on("mount", () => {
    const quoteForm = _this.tags["m-quote-form"].root;
    quoteForm.on("saveQuote cancelQuote", function () {
        quoteForm.trigger('hideQuoteForm');
    });
});

function showNewQuoteForm() {
    this.tags['m-quote-form'].root.trigger('showQuoteForm');
}
});});