
<m-modal
    data-modal-title
>   

<h2>{this.opts.dataModalTitle}</h2>

<yield />

<style scoped type="less">
    @import url('../../css/main.less');

    :scope {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 1rem;
        background: @lightgray;
        
    }

    @media screen and (min-width: @ipad-height) {
        :scope {
            width: 30rem;
            max-height: 50rem;
            border-radius: 0.6rem;
            box-shadow: 0.2rem 0 2rem 0 @black;
        }
    }

    h2 {
        margin: 0;
    }
</style>

</m-modal>