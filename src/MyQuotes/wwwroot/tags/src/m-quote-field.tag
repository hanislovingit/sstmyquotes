<m-quote-field 
    data-label 
    data-value 
    data-placeholder 
    data-is-single-line>

    {opts.dataLabel}
    <div class="comic-neue-angular field-content {value || isFocused() ? '' : 'show-placeholder'} {opts.dataIsSingleLine ? 'single-line' : ''}" contenteditable="true" data-placeholder-text={opts.dataPlaceholder} onfocus={update} onblur={update} >{value}</div>

    <script>

        this.on('mount', () => {
            this.value = this.opts.dataValue;
            
        });

        this.on('update', () => {
            //console.log(this.opts.dataValue);
            //debugger;

            //console.log(this.value);
            this.fieldContent = this.fieldContent || this.root.querySelector('.field-content');

            if(this.isMounted){
                // pure magic. You are welcome!
                // No, not really. We had to use the following hack to make this work.
                // The problem seemed to be that Riot tries to append the new value to the existing value.
                this.fieldContent.innerHTML = this.value = this.fieldContent.innerHTML;
            }
        });

        this.clearValue = () => {
          this.value = '';
          this.fieldContent.innerHTML = '';
          this.update();
        }

        this.getValue = () => this.value.replace(/<[^\/]*>/g, '\n').replace(/<.*>/g,'');

        this.isFocused = () => (!!this.root.querySelector(':focus'));

    </script>

    <style scoped type="less" >
        @import url('../../css/main.less');

        :scope{
            display: block;
            border: 1px solid @darkgray;
            border-radius: 0.3rem;
            padding: 0.6rem;
            margin: 1rem 0;
            height: ~"calc((100% - 5rem - 5rem - 5rem) / 2)";
        }

        .field-content {
            white-space: pre-wrap;
            height: ~"calc(100% - 1.5rem)";
            padding: 0.3rem;
            overflow: hidden;
        }

        :scope[data-is-single-line] {
            white-space: nowrap;
            height: 5rem;
            
        }

        .show-placeholder:before {
            content: attr(data-placeholder-text);
            font-style: italic;
            color: @darkgray;
        }


        .comic-neue-angular {
            font-family: 'Comic Neue Angular', sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5rem;
        }

    </style>
</m-quote-field>
