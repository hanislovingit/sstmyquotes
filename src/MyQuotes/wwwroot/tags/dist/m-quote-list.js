
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('m-quote-list', '<ul> <li each="{quote in quotes}"> <m-quote data-quote="{quote}"> {quote.text} </m-quote> </li> </ul>', 'm-quote-list html,[riot-tag="m-quote-list"] html,[data-is="m-quote-list"] html{box-sizing:border-box} m-quote-list *,[riot-tag="m-quote-list"] *,[data-is="m-quote-list"] *,m-quote-list *:before,[riot-tag="m-quote-list"] *:before,[data-is="m-quote-list"] *:before,m-quote-list *:after,[riot-tag="m-quote-list"] *:after,[data-is="m-quote-list"] *:after{box-sizing:inherit} m-quote-list body,[riot-tag="m-quote-list"] body,[data-is="m-quote-list"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-quote-list i.fa,[riot-tag="m-quote-list"] i.fa,[data-is="m-quote-list"] i.fa{font-size:1.6rem} m-quote-list i.fa.hollow,[riot-tag="m-quote-list"] i.fa.hollow,[data-is="m-quote-list"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-quote-list i.fa.hollow.active,[riot-tag="m-quote-list"] i.fa.hollow.active,[data-is="m-quote-list"] i.fa.hollow.active{color:#fed729} m-quote-list button,[riot-tag="m-quote-list"] button,[data-is="m-quote-list"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote-list .btn-primary,[riot-tag="m-quote-list"] .btn-primary,[data-is="m-quote-list"] .btn-primary{background:#0e6bd8} m-quote-list .btn-secondary,[riot-tag="m-quote-list"] .btn-secondary,[data-is="m-quote-list"] .btn-secondary{background:#ff5d32} m-quote-list ul,[riot-tag="m-quote-list"] ul,[data-is="m-quote-list"] ul{list-style-type:none;padding:0} m-quote-list .interactive,[riot-tag="m-quote-list"] .interactive,[data-is="m-quote-list"] .interactive{cursor:pointer;padding:.3rem} m-quote-list .interactive:hover,[riot-tag="m-quote-list"] .interactive:hover,[data-is="m-quote-list"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-quote-list,[riot-tag="m-quote-list"],[data-is="m-quote-list"]{display:block} m-quote-list ul li,[riot-tag="m-quote-list"] ul li,[data-is="m-quote-list"] ul li{display:inline-block;width:100%;border-radius:.6rem;box-shadow:0 0 .6rem 0 #090a0a;padding:1.2rem;margin:.6rem 0}@media (min-width:768px){ m-quote-list ul li,[riot-tag="m-quote-list"] ul li,[data-is="m-quote-list"] ul li{width:calc(49% - 1rem);margin:.6rem}}@media (min-width:992px){ m-quote-list ul li,[riot-tag="m-quote-list"] ul li,[data-is="m-quote-list"] ul li{width:calc(25% - 1.2rem);max-width:20rem}}', '', function(opts) {
var _this = this;

// note on Aug 30, 2016
// we played with styling the list of quotes using flex. We made good progress
// with the grid of quotes, but didn't get it perfect. We need to know flexbox
// a little better. But for now, it might be good enough.
//
this.mixin('redux');
this.mixin('actions');
this.on('update', () => _this.quotes = _this.store.getState());

this.store.subscribe(this.update);
});});