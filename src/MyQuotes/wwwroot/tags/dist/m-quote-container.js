
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('m-quote-container', '<m-modal-curtain> <m-modal data-modal-title="Add/Edit Quote" id="quote-form-modal"> <m-quote-form data-quote="{selectedQuote}"></m-quote-form> </m-modal> </m-modal-curtain> <main-nav></main-nav> <header>{filterName}</header> <i class="fa fa-plus interactive add-icon" onclick="{toggleQuoteForm}"></i> <m-quote-list></m-quote-list>', 'm-quote-container html,[riot-tag="m-quote-container"] html,[data-is="m-quote-container"] html,m-quote-container body,[riot-tag="m-quote-container"] body,[data-is="m-quote-container"] body{height:100%} m-quote-container html,[riot-tag="m-quote-container"] html,[data-is="m-quote-container"] html{box-sizing:border-box} m-quote-container *,[riot-tag="m-quote-container"] *,[data-is="m-quote-container"] *,m-quote-container *:before,[riot-tag="m-quote-container"] *:before,[data-is="m-quote-container"] *:before,m-quote-container *:after,[riot-tag="m-quote-container"] *:after,[data-is="m-quote-container"] *:after{box-sizing:inherit} m-quote-container body,[riot-tag="m-quote-container"] body,[data-is="m-quote-container"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-quote-container i.fa,[riot-tag="m-quote-container"] i.fa,[data-is="m-quote-container"] i.fa{font-size:1.6rem} m-quote-container i.fa.hollow,[riot-tag="m-quote-container"] i.fa.hollow,[data-is="m-quote-container"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-quote-container i.fa.hollow.active,[riot-tag="m-quote-container"] i.fa.hollow.active,[data-is="m-quote-container"] i.fa.hollow.active{color:#fed729} m-quote-container button,[riot-tag="m-quote-container"] button,[data-is="m-quote-container"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote-container .btn-primary,[riot-tag="m-quote-container"] .btn-primary,[data-is="m-quote-container"] .btn-primary{background:#0e6bd8} m-quote-container .btn-secondary,[riot-tag="m-quote-container"] .btn-secondary,[data-is="m-quote-container"] .btn-secondary{background:#ff5d32} m-quote-container ul,[riot-tag="m-quote-container"] ul,[data-is="m-quote-container"] ul{list-style-type:none;padding:0} m-quote-container .interactive,[riot-tag="m-quote-container"] .interactive,[data-is="m-quote-container"] .interactive{cursor:pointer;padding:.3rem} m-quote-container .interactive:hover,[riot-tag="m-quote-container"] .interactive:hover,[data-is="m-quote-container"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-quote-container,[riot-tag="m-quote-container"],[data-is="m-quote-container"]{position:relative;padding:2rem;min-height:100%;display:block} m-quote-container .add-icon,[riot-tag="m-quote-container"] .add-icon,[data-is="m-quote-container"] .add-icon{position:absolute;top:1rem;right:1rem} m-quote-container header,[riot-tag="m-quote-container"] header,[data-is="m-quote-container"] header{text-align:center}@media screen and (min-width:1024px){ m-quote-container,[riot-tag="m-quote-container"],[data-is="m-quote-container"]{margin-left:14rem}}', '', function(opts) {
var _this = this;

// create the modal quote form for add/edit/read of a quote. The modal will take up
// the whole view port on a mobile view, and a fixed size on desktop view.
// Today we decided that this app will just have one html page, but has 2 views:
// The quote list view and the add/edit/read quote view.
// We will use contentEditable for editing a quote. We do this by adding css styles
// to the contentEditable html elements to make them obvious to the user that
// those contents are editable.

this.mixin("redux");
this.store.subscribe(this.update);

this.filterName = "Recent";

this.on("mount", () => {
    //this.quoteForm = this.tags["m-quote-form"].root;

    // this.quoteForm.on("saveQuote cancelQuote", function () {
    //     this.quoteForm.trigger('toggleQuoteForm');
    // });

});

this.on("update", () => {
    _this.selectedQuote = _this.store.getState().selectedQuote;
    debugger;
});

this.toggleQuoteForm = () => {

    _this.store.dispatch({
        type: "OPEN_MODAL",
        id: "quote-form-modal"
    });

    //this.quoteForm.trigger('toggleQuoteForm');
};
});
});