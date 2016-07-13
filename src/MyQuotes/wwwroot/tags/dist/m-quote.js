
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('m-quote', '<blockquote> <yield></yield> </blockquote> <time> {opts.dataQuote.modifiedOn} </time> <div> <i class="fa fa-star {opts.dataQuote.isFaved ? \'active\' : \'\'}" onclick="{toggleFav}"></i> <i class="fa fa-archive {opts.dataQuote.isArchived ? \'active\' : \'\'}" onclick="{toggleArchive}"></i> </div> <cite>{opts.dataQuote.author}</cite>', 'm-quote,[riot-tag="m-quote"],[data-is="m-quote"]{ border: 1px solid gray; background-color: lightblue; display: inline-block; min-width: 200px; max-width: 200px; border-radius: 5px; }', '', function(opts) {
this.mixin("redux");
});});