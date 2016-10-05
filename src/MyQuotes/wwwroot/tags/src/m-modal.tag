
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
        padding: 2rem;
        background: @lightgray;
    }
</style>

</m-modal>