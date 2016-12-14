
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('m-quote', '<div class="quote-content" onclick="{showQuote}"> <blockquote> <yield></yield> </blockquote> <cite>{opts.dataQuote.author}</cite> <time> {opts.dataQuote.modifiedOn.toLocaleDateString(\'en-US\', {                 weekday: \'short\',                 year: \'numeric\',                 month: \'short\',                 day: \'numeric\'             })} </time> </div> <div> <i class="fa fa-star hollow {opts.dataQuote.isFaved ? \'active\' : \'\'}" onclick="{toggleFav}"></i> <i class="fa fa-archive hollow {opts.dataQuote.isArchived ? \'active\' : \'\'}" onclick="{toggleArchive}"></i> </div>', 'm-quote html,[riot-tag="m-quote"] html,[data-is="m-quote"] html,m-quote body,[riot-tag="m-quote"] body,[data-is="m-quote"] body{height:100%} m-quote html,[riot-tag="m-quote"] html,[data-is="m-quote"] html{box-sizing:border-box} m-quote *,[riot-tag="m-quote"] *,[data-is="m-quote"] *,m-quote *:before,[riot-tag="m-quote"] *:before,[data-is="m-quote"] *:before,m-quote *:after,[riot-tag="m-quote"] *:after,[data-is="m-quote"] *:after{box-sizing:inherit} m-quote body,[riot-tag="m-quote"] body,[data-is="m-quote"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-quote i.fa,[riot-tag="m-quote"] i.fa,[data-is="m-quote"] i.fa{font-size:1.6rem} m-quote i.fa.hollow,[riot-tag="m-quote"] i.fa.hollow,[data-is="m-quote"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-quote i.fa.hollow.active,[riot-tag="m-quote"] i.fa.hollow.active,[data-is="m-quote"] i.fa.hollow.active{color:#fed729} m-quote button,[riot-tag="m-quote"] button,[data-is="m-quote"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote .btn-primary,[riot-tag="m-quote"] .btn-primary,[data-is="m-quote"] .btn-primary{background:#0e6bd8} m-quote .btn-secondary,[riot-tag="m-quote"] .btn-secondary,[data-is="m-quote"] .btn-secondary{background:#ff5d32} m-quote ul,[riot-tag="m-quote"] ul,[data-is="m-quote"] ul{list-style-type:none;padding:0} m-quote .interactive,[riot-tag="m-quote"] .interactive,[data-is="m-quote"] .interactive{cursor:pointer;padding:.3rem} m-quote .interactive:hover,[riot-tag="m-quote"] .interactive:hover,[data-is="m-quote"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-quote,[riot-tag="m-quote"],[data-is="m-quote"]{width:100%;display:block} m-quote .quote-content,[riot-tag="m-quote"] .quote-content,[data-is="m-quote"] .quote-content{cursor:pointer} m-quote blockquote,[riot-tag="m-quote"] blockquote,[data-is="m-quote"] blockquote{height:10rem;overflow:hidden} m-quote blockquote:before,[riot-tag="m-quote"] blockquote:before,[data-is="m-quote"] blockquote:before,m-quote blockquote:after,[riot-tag="m-quote"] blockquote:after,[data-is="m-quote"] blockquote:after{font-size:4rem;color:#c3d7db;font-family:\'Georgia\',serif;line-height:.6rem;height:.3rem;display:inline-block;vertical-align:bottom} m-quote blockquote:before,[riot-tag="m-quote"] blockquote:before,[data-is="m-quote"] blockquote:before{content:\'\\201c\'} m-quote blockquote:after,[riot-tag="m-quote"] blockquote:after,[data-is="m-quote"] blockquote:after{content:\'\\201d\'} m-quote cite,[riot-tag="m-quote"] cite,[data-is="m-quote"] cite{display:block;text-align:right} m-quote cite:before,[riot-tag="m-quote"] cite:before,[data-is="m-quote"] cite:before{content:"~";padding-right:.3rem} m-quote i,[riot-tag="m-quote"] i,[data-is="m-quote"] i{cursor:pointer}', 'data-quote', function(opts) {
var _this = this;

this.mixin("redux");

this.toggleFav = () => {
    const quote = _this.opts.dataQuote;
    quote.isFaved = !quote.isFaved;
    _this.store.dispatch({
        type: 'EDIT_QUOTE',
        payload: quote
    });
};

this.toggleArchive = () => {
    const quote = _this.opts.dataQuote;
    quote.isArchived = !quote.isArchived;
    _this.store.dispatch({
        type: 'EDIT_QUOTE',
        payload: quote
    });
};

this.showQuote = () => {
    const quote = _this.opts.dataQuote;

    _this.store.dispatch({
        type: "SELECT_QUOTE",
        payload: quote
    });

    _this.store.dispatch({
        type: "OPEN_MODAL",
        id: "quote-form-modal"
    });

    // get the quote object clicked on, and assign it to the m-quote tag
};
});});