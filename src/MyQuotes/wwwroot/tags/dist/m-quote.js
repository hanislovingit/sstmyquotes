
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('m-quote', '<blockquote> <yield></yield> </blockquote> <time> {opts.dataQuote.modifiedOn} </time> <div> <i class="fa fa-star hollow {opts.dataQuote.isFaved ? \'active\' : \'\'}" onclick="{toggleFav}"></i> <i class="fa fa-archive hollow {opts.dataQuote.isArchived ? \'active\' : \'\'}" onclick="{toggleArchive}"></i> </div> <cite>{opts.dataQuote.author}</cite>', 'm-quote html,[riot-tag="m-quote"] html,[data-is="m-quote"] html{box-sizing:border-box} m-quote *,[riot-tag="m-quote"] *,[data-is="m-quote"] *,m-quote *:before,[riot-tag="m-quote"] *:before,[data-is="m-quote"] *:before,m-quote *:after,[riot-tag="m-quote"] *:after,[data-is="m-quote"] *:after{box-sizing:inherit} m-quote body,[riot-tag="m-quote"] body,[data-is="m-quote"] body{font-size:16px;line-height:1.6rem;padding:2rem} m-quote i.fa.hollow,[riot-tag="m-quote"] i.fa.hollow,[data-is="m-quote"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;font-size:1.6rem;vertical-align:middle} m-quote i.fa.hollow.active,[riot-tag="m-quote"] i.fa.hollow.active,[data-is="m-quote"] i.fa.hollow.active{color:#fed729} m-quote button,[riot-tag="m-quote"] button,[data-is="m-quote"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote .btn-primary,[riot-tag="m-quote"] .btn-primary,[data-is="m-quote"] .btn-primary{background:#0e6bd8} m-quote .btn-secondary,[riot-tag="m-quote"] .btn-secondary,[data-is="m-quote"] .btn-secondary{background:#ff5d32} m-quote ul,[riot-tag="m-quote"] ul,[data-is="m-quote"] ul{list-style-type:none;padding:0} m-quote,[riot-tag="m-quote"],[data-is="m-quote"]{border:1px solid gray;background-color:lightblue;display:inline-block;min-width:200px;max-width:200px;border-radius:5px}', '', function(opts) {
this.mixin("redux");
});});