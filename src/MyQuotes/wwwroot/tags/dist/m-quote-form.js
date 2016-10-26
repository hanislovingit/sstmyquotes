
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('m-quote-form', '<form id="quoteGreatForm"> <m-quote-field data-label="Quote" data-value="{opts.dataQuote.text}" data-placeholder="Enter quote here..."></m-quote-field> <m-quote-field data-label="Author" data-value="{opts.dataQuote.author}" data-is-single-line="true" data-placeholder="Enter author here..."></m-quote-field> <m-quote-field data-label="Notes" data-value="{opts.dataQuote.notes}" data-placeholder="Enter notes here about the quote..."></m-quote-field> </label> <div class="flex-container"> <label for="favCtrl" class="inline" onclick="{toggleFav}"> Favorite <input type="hidden" name="favCtrl" id="favCtrl" value="{isFaved ? ⁗true⁗ : ⁗false⁗}"> <i class="fa fa-star hollow {isFaved ? \'active\' : \'\'}"></i> </label> <label for="archiveCtrl" class="inline" onclick="{toggleArchive}"> Archive <input type="hidden" name="archiveCtrl" id="archiveCtrl" value="{isArchived ? ⁗true⁗ : ⁗false⁗}"> <i class="fa fa-archive hollow {isArchived ? \'active\' : \'\'}"></i> </label> </div> <input type="hidden" name="quoteId" id="quoteId" value="{opts.dataQuote.id || store.getState().length}"> <input type="hidden" name="createdOn" value="{opts.dataQuote.createdOn}"> <div class="flex-container"> <button type="button" class="btn-secondary" onclick="{cancel}">Cancel</button> <button type="button" class="btn-primary" onclick="{save}">Save</button> </div> </form>', 'm-quote-form html,[riot-tag="m-quote-form"] html,[data-is="m-quote-form"] html{box-sizing:border-box} m-quote-form *,[riot-tag="m-quote-form"] *,[data-is="m-quote-form"] *,m-quote-form *:before,[riot-tag="m-quote-form"] *:before,[data-is="m-quote-form"] *:before,m-quote-form *:after,[riot-tag="m-quote-form"] *:after,[data-is="m-quote-form"] *:after{box-sizing:inherit} m-quote-form body,[riot-tag="m-quote-form"] body,[data-is="m-quote-form"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-quote-form i.fa,[riot-tag="m-quote-form"] i.fa,[data-is="m-quote-form"] i.fa{font-size:1.6rem} m-quote-form i.fa.hollow,[riot-tag="m-quote-form"] i.fa.hollow,[data-is="m-quote-form"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-quote-form i.fa.hollow.active,[riot-tag="m-quote-form"] i.fa.hollow.active,[data-is="m-quote-form"] i.fa.hollow.active{color:#fed729} m-quote-form button,[riot-tag="m-quote-form"] button,[data-is="m-quote-form"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote-form .btn-primary,[riot-tag="m-quote-form"] .btn-primary,[data-is="m-quote-form"] .btn-primary{background:#0e6bd8} m-quote-form .btn-secondary,[riot-tag="m-quote-form"] .btn-secondary,[data-is="m-quote-form"] .btn-secondary{background:#ff5d32} m-quote-form ul,[riot-tag="m-quote-form"] ul,[data-is="m-quote-form"] ul{list-style-type:none;padding:0} m-quote-form .interactive,[riot-tag="m-quote-form"] .interactive,[data-is="m-quote-form"] .interactive{cursor:pointer;padding:.3rem} m-quote-form .interactive:hover,[riot-tag="m-quote-form"] .interactive:hover,[data-is="m-quote-form"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-quote-form,[riot-tag="m-quote-form"],[data-is="m-quote-form"]{display:block;padding:0 1rem;height:auto;max-height:44rem;margin:1rem 0;overflow:hidden;transition:max-height .6s ease-in-out;background:#c3d7db} m-quote-form.hidden,[riot-tag="m-quote-form"].hidden,[data-is="m-quote-form"].hidden{max-height:0} m-quote-form label,[riot-tag="m-quote-form"] label,[data-is="m-quote-form"] label{display:block;margin-bottom:1rem} m-quote-form input,[riot-tag="m-quote-form"] input,[data-is="m-quote-form"] input,m-quote-form textarea,[riot-tag="m-quote-form"] textarea,[data-is="m-quote-form"] textarea{width:100%;display:block;border-radius:.3rem;border:1px solid gray;-webkit-appearance:none;box-shadow:inset 0 0 15px -7px black;padding:.6rem} m-quote-form .quote-content,[riot-tag="m-quote-form"] .quote-content,[data-is="m-quote-form"] .quote-content{min-height:12rem;border:1px solid #090a0a;border-radius:.3rem;padding:.6rem} m-quote-form .quote-content:focus,[riot-tag="m-quote-form"] .quote-content:focus,[data-is="m-quote-form"] .quote-content:focus{background:#fafafa} m-quote-form input[type="checkbox"],[riot-tag="m-quote-form"] input[type="checkbox"],[data-is="m-quote-form"] input[type="checkbox"]{width:20px;height:20px;display:inline-block} m-quote-form label.inline,[riot-tag="m-quote-form"] label.inline,[data-is="m-quote-form"] label.inline{display:inline-block;width:auto} m-quote-form .flex-container,[riot-tag="m-quote-form"] .flex-container,[data-is="m-quote-form"] .flex-container{display:flex;justify-content:space-between}', 'data-quote', function(opts) {
var _this = this;

this.mixin('redux');
this.mixin('actions');
//riot.observable(this.root);

this.save = () => {
    // construst the quote obj
    // we already have our action creator
    // dispatch ADD_QUOTE action
    const quote = {
        text: _this.txtQuote.value,
        author: _this.txtQuoteAuthor.value,
        isArchived: _this.isArchived,
        isFaved: _this.isFaved,
        notes: _this.txtNotes.value,
        createdOn: _this.createdOn || new Date(),
        modifiedOn: new Date(),
        id: _this.quoteId
    };

    // this.editQuote and this.addQuote are brought in by "actions" mixin
    const action = _this.opts.dataQuote ? _this.editQuote(quote) : _this.addQuote(quote);
    _this.store.dispatch(action);
    _this.clearForm();
    _this.store.dispatch({
        type: "CLOSE_MODAL"
    });
};

this.cancel = () => {
    _this.clearForm();
    _this.store.dispatch({
        type: "CLOSE_MODAL"
    });
};

this.clearForm = () => {
    _this.quoteGreatForm.reset();

    // Because this fields value get turned into a literal interpretation of {...}
    // if we don't clear it manually.  Cause is unknown.
    _this.txtQuoteAuthor.value = '';
    _this.isFaved = false;
    _this.isArchived = false;
};

this.toggleFav = () => {
    _this.isFaved = !_this.isFaved;
};

this.toggleArchive = () => {
    _this.isArchived = !_this.isArchived;
};

// this.root.on('toggleQuoteForm', () => {
//     this.root.classList.toggle("hidden");
// });

this.onContentEditableFocus = event => {
    let isNewQuote = !_this.opts.dataQuote;

    if (isNewQuote) {
        event.target.innerHTML = "";
    }
};

this.onContentEditableBlur = event => {
    if (!event.target.innerHTML) {
        event.target.innerHTML = event.target.dataset.placeholder;
    }
};
});});