
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {

riot.tag2('m-modal', '<h2>{this.opts.dataModalTitle}</h2> <yield></yield>', 'm-modal html,[riot-tag="m-modal"] html,[data-is="m-modal"] html{box-sizing:border-box} m-modal *,[riot-tag="m-modal"] *,[data-is="m-modal"] *,m-modal *:before,[riot-tag="m-modal"] *:before,[data-is="m-modal"] *:before,m-modal *:after,[riot-tag="m-modal"] *:after,[data-is="m-modal"] *:after{box-sizing:inherit} m-modal body,[riot-tag="m-modal"] body,[data-is="m-modal"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-modal i.fa,[riot-tag="m-modal"] i.fa,[data-is="m-modal"] i.fa{font-size:1.6rem} m-modal i.fa.hollow,[riot-tag="m-modal"] i.fa.hollow,[data-is="m-modal"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-modal i.fa.hollow.active,[riot-tag="m-modal"] i.fa.hollow.active,[data-is="m-modal"] i.fa.hollow.active{color:#fed729} m-modal button,[riot-tag="m-modal"] button,[data-is="m-modal"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-modal .btn-primary,[riot-tag="m-modal"] .btn-primary,[data-is="m-modal"] .btn-primary{background:#0e6bd8} m-modal .btn-secondary,[riot-tag="m-modal"] .btn-secondary,[data-is="m-modal"] .btn-secondary{background:#ff5d32} m-modal ul,[riot-tag="m-modal"] ul,[data-is="m-modal"] ul{list-style-type:none;padding:0} m-modal .interactive,[riot-tag="m-modal"] .interactive,[data-is="m-modal"] .interactive{cursor:pointer;padding:.3rem} m-modal .interactive:hover,[riot-tag="m-modal"] .interactive:hover,[data-is="m-modal"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-modal,[riot-tag="m-modal"],[data-is="m-modal"]{width:100%;height:100%;margin:0;padding:1rem;background:#c3d7db} m-modal h2,[riot-tag="m-modal"] h2,[data-is="m-modal"] h2{margin:0}', 'data-modal-title', function(opts) {
});});