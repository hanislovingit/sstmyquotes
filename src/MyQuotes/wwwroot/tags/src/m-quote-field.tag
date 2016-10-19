<m-quote-field data-label data-value data-placeholder data-is-single-line>
    {opts.dataLabel}
    <div class="field-content" contenteditable="true" onfocus={update} onblur={update}>{getFieldValue()}</div>
    <div>{getFieldValue()}</div>

    <script>
        this.on('mount', () => {
            this.value = this.opts.dataValue;
        });

        this.on('update', () => {
            if(this.isMounted){
                this.value = this.root.querySelector('.field-content').textContent;
            }
        });

        this.getFieldValue = () => {
            if(this.value) return this.value;
            if(this.isFocused()) return "";
            return this.opts.dataPlaceholder;
        };

        this.isFocused = () => {
            return (!!this.root.querySelector(':focus'));
        };
    </script>

    <style scoped type="less" >
        @import url('../../css/main.less');

        :scope{
            display: block;
            border: 1px solid @black;
            border-radius: 0.3rem;
            padding: 0.6rem;
        }
    </style>
</m-quote-field>