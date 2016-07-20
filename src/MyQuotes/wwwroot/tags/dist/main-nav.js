
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('main-nav', '<ul> <li> <a href="/AllQuotes">All</a> </li> <li> <a href="/FavoriteQuotes">Favorites</a> </li> <li> <a href="/ArchiveQuotes">Archive</a> </li> </ul>', 'main-nav html,[riot-tag="main-nav"] html,[data-is="main-nav"] html{box-sizing:border-box} main-nav *,[riot-tag="main-nav"] *,[data-is="main-nav"] *,main-nav *:before,[riot-tag="main-nav"] *:before,[data-is="main-nav"] *:before,main-nav *:after,[riot-tag="main-nav"] *:after,[data-is="main-nav"] *:after{box-sizing:inherit} main-nav body,[riot-tag="main-nav"] body,[data-is="main-nav"] body{font-size:16px;line-height:1.6rem} main-nav i.fa,[riot-tag="main-nav"] i.fa,[data-is="main-nav"] i.fa{color:#fafafa;text-shadow:0 0 2px #090a0a;font-size:1.6rem;vertical-align:middle} main-nav i.fa.active,[riot-tag="main-nav"] i.fa.active,[data-is="main-nav"] i.fa.active{color:#fed729} main-nav button,[riot-tag="main-nav"] button,[data-is="main-nav"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} main-nav .btn-primary,[riot-tag="main-nav"] .btn-primary,[data-is="main-nav"] .btn-primary{background:#0e6bd8} main-nav .btn-secondary,[riot-tag="main-nav"] .btn-secondary,[data-is="main-nav"] .btn-secondary{background:#ff5d32} main-nav ul,[riot-tag="main-nav"] ul,[data-is="main-nav"] ul{list-style-type:none;padding:0} main-nav,[riot-tag="main-nav"],[data-is="main-nav"]{position:absolute;right:0;top:0;min-height:100%;height:auto;transition:right .6s ease-in-out;box-shadow:2px 0 12px 0 #090a0a;background:rgba(250,250,250,0.6)} main-nav .hidden,[riot-tag="main-nav"] .hidden,[data-is="main-nav"] .hidden{right:-100%}', '', function(opts) {
});});