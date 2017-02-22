<m-quote-field 
    data-label 
    data-value 
    data-placeholder 
    data-is-single-line>

    {opts.dataLabel}
    <div class="comic-neue-angular field-content {value || isFocused() ? '' : 'show-placeholder'} {opts.dataIsSingleLine ? 'single-line' : ''}" contenteditable="true" data-placeholder-text={opts.dataPlaceholder} onfocus={update} onblur={update}>{opts.dataValue}</div>

    <script>

        this.on('mount', () => {
           this.fieldContent = this.fieldContent || this.root.querySelector('.field-content');
        })

        this.on('update', () => {
            if(this.isMounted){
                console.log("before opts.datavalue:" + this.opts.dataValue + " value:" + this.value + " fieldContent.innerHTML:" + console.log(this.fieldContent.innerHTML));

                if (this.fieldContent && this.fieldContent.innerHTML) {
                    this.opts.dataValue = this.fieldContent.innerHTML;
                    this.value = this.opts.dataValue;
                }
                else if (this.opts.dataValue) {
                    this.fieldContent.innerHTML = this.opts.dataValue;
                    this.value = this.opts.dataValue;
                }

                console.log("after opts.datavalue:" + this.opts.dataValue + " value:" + this.value + " fieldContent.innerHTML:" + console.log(this.fieldContent.innerHTML));
            }
        });

        this.clearValue = () => {
            this.value = '';
            if (this.fieldContent) this.fieldContent.innerHTML = '';
            this.opts.dataValue = '';
        }

        this.getValue = () => {
            this.update();
            return this.value.replace(/<[^\/]*>/g, '\n').replace(/<.*>/g, '');
        }

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
