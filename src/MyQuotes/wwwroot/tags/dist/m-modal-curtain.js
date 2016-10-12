
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('m-modal-curtain', '<yield></yield>', 'm-modal-curtain html,[riot-tag="m-modal-curtain"] html,[data-is="m-modal-curtain"] html{box-sizing:border-box} m-modal-curtain *,[riot-tag="m-modal-curtain"] *,[data-is="m-modal-curtain"] *,m-modal-curtain *:before,[riot-tag="m-modal-curtain"] *:before,[data-is="m-modal-curtain"] *:before,m-modal-curtain *:after,[riot-tag="m-modal-curtain"] *:after,[data-is="m-modal-curtain"] *:after{box-sizing:inherit} m-modal-curtain body,[riot-tag="m-modal-curtain"] body,[data-is="m-modal-curtain"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-modal-curtain i.fa,[riot-tag="m-modal-curtain"] i.fa,[data-is="m-modal-curtain"] i.fa{font-size:1.6rem} m-modal-curtain i.fa.hollow,[riot-tag="m-modal-curtain"] i.fa.hollow,[data-is="m-modal-curtain"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-modal-curtain i.fa.hollow.active,[riot-tag="m-modal-curtain"] i.fa.hollow.active,[data-is="m-modal-curtain"] i.fa.hollow.active{color:#fed729} m-modal-curtain button,[riot-tag="m-modal-curtain"] button,[data-is="m-modal-curtain"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-modal-curtain .btn-primary,[riot-tag="m-modal-curtain"] .btn-primary,[data-is="m-modal-curtain"] .btn-primary{background:#0e6bd8} m-modal-curtain .btn-secondary,[riot-tag="m-modal-curtain"] .btn-secondary,[data-is="m-modal-curtain"] .btn-secondary{background:#ff5d32} m-modal-curtain ul,[riot-tag="m-modal-curtain"] ul,[data-is="m-modal-curtain"] ul{list-style-type:none;padding:0} m-modal-curtain .interactive,[riot-tag="m-modal-curtain"] .interactive,[data-is="m-modal-curtain"] .interactive{cursor:pointer;padding:.3rem} m-modal-curtain .interactive:hover,[riot-tag="m-modal-curtain"] .interactive:hover,[data-is="m-modal-curtain"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-modal-curtain,[riot-tag="m-modal-curtain"],[data-is="m-modal-curtain"]{background:rgba(9,10,10,0.6);width:100%;height:100%;position:absolute;top:0;left:0;display:none;z-index:10} m-modal-curtain.visible,[riot-tag="m-modal-curtain"].visible,[data-is="m-modal-curtain"].visible{display:flex;justify-content:center;align-items:center}', 'class="{containsOpenModal() ? \'visible\' : \'\'}"', function(opts) {
var _this = this;

this.mixin("redux");
this.store.subscribe(this.update);

this.containsOpenModal = () => {
    const modals = [].concat(_this.tags["m-modal"]);
    const currentOpenModal = _this.store.getState().currentOpenModal;

    return !!modals.find(modal => modal.root.id === currentOpenModal);
};

// Sep 27, 2016
// We spent a bunch of time trying to pull down the changes from Github in VS Code. We couldn't get it to work, so we ended up
// trashing the original project folder, and pulled down a new copy from github.
// we created this modal curtain component and we are going to make it work in a smiliar way as in OLS project.
// we are going to use the Redux store to track current open modal. Also need to create a reducer for current open modal.
});});