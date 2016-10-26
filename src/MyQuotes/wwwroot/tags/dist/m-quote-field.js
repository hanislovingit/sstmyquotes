
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('m-quote-field', '{opts.dataLabel} <div class="comic-neue-angular field-content {value || isFocused() ? \'\' : \'show-placeholder\'} {opts.dataIsSingleLine ? \'single-line\' : \'\'}" contenteditable="true" data-placeholder-text="{opts.dataPlaceholder}" onfocus="{update}" onblur="{update}">{value}</div>', 'm-quote-field html,[riot-tag="m-quote-field"] html,[data-is="m-quote-field"] html{box-sizing:border-box} m-quote-field *,[riot-tag="m-quote-field"] *,[data-is="m-quote-field"] *,m-quote-field *:before,[riot-tag="m-quote-field"] *:before,[data-is="m-quote-field"] *:before,m-quote-field *:after,[riot-tag="m-quote-field"] *:after,[data-is="m-quote-field"] *:after{box-sizing:inherit} m-quote-field body,[riot-tag="m-quote-field"] body,[data-is="m-quote-field"] body{font-size:16px;line-height:1.6rem;overflow-y:scroll;background-color:#fafafa;font-family:"Open Sans",Helvetica,Arial,sans-serif} m-quote-field i.fa,[riot-tag="m-quote-field"] i.fa,[data-is="m-quote-field"] i.fa{font-size:1.6rem} m-quote-field i.fa.hollow,[riot-tag="m-quote-field"] i.fa.hollow,[data-is="m-quote-field"] i.fa.hollow{color:#fafafa;text-shadow:0 0 2px #090a0a;vertical-align:middle} m-quote-field i.fa.hollow.active,[riot-tag="m-quote-field"] i.fa.hollow.active,[data-is="m-quote-field"] i.fa.hollow.active{color:#fed729} m-quote-field button,[riot-tag="m-quote-field"] button,[data-is="m-quote-field"] button{border-radius:.6rem;padding:.6rem 1rem;background:#2c3233;color:#fafafa;min-width:6rem} m-quote-field .btn-primary,[riot-tag="m-quote-field"] .btn-primary,[data-is="m-quote-field"] .btn-primary{background:#0e6bd8} m-quote-field .btn-secondary,[riot-tag="m-quote-field"] .btn-secondary,[data-is="m-quote-field"] .btn-secondary{background:#ff5d32} m-quote-field ul,[riot-tag="m-quote-field"] ul,[data-is="m-quote-field"] ul{list-style-type:none;padding:0} m-quote-field .interactive,[riot-tag="m-quote-field"] .interactive,[data-is="m-quote-field"] .interactive{cursor:pointer;padding:.3rem} m-quote-field .interactive:hover,[riot-tag="m-quote-field"] .interactive:hover,[data-is="m-quote-field"] .interactive:hover{box-shadow:0 0 12px 0 #090a0a} m-quote-field,[riot-tag="m-quote-field"],[data-is="m-quote-field"]{display:block;border:1px solid #2c3233;border-radius:.3rem;padding:.6rem;margin:1rem 0} m-quote-field .field-content,[riot-tag="m-quote-field"] .field-content,[data-is="m-quote-field"] .field-content{white-space:pre-wrap;height:20rem;max-height:30rem;padding:.3rem} m-quote-field .single-line,[riot-tag="m-quote-field"] .single-line,[data-is="m-quote-field"] .single-line{white-space:nowrap;height:2.3rem} m-quote-field .show-placeholder:before,[riot-tag="m-quote-field"] .show-placeholder:before,[data-is="m-quote-field"] .show-placeholder:before{content:attr(data-placeholder-text);font-style:italic;color:#2c3233} m-quote-field .comic-neue-angular,[riot-tag="m-quote-field"] .comic-neue-angular,[data-is="m-quote-field"] .comic-neue-angular{font-family:\'Comic Neue Angular\',sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem}', 'data-label data-value data-placeholder data-is-single-line', function(opts) {
var _this = this;

this.on('mount', () => {
    _this.value = _this.opts.dataValue;
});

this.on('update', () => {
    //console.log(this.value);
    _this.fieldContent = _this.fieldContent || _this.root.querySelector('.field-content');

    if (_this.isMounted) {
        // pure magic. You are welcome!
        // No, not really. We had to use the following hack to make this work.
        // The problem seemed to be that Riot tries to append the new value to the existing value.
        _this.fieldContent.innerHTML = _this.value = _this.fieldContent.innerHTML;
    }
});

this.isFocused = () => !!_this.root.querySelector(':focus');
});});