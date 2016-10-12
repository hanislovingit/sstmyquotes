<m-modal-curtain class={containsOpenModal() ? 'visible' : ''} >

<yield />

<script>
    this.mixin("redux");
    this.store.subscribe(this.update);

    this.containsOpenModal = () => {
        const modals = [].concat(this.tags["m-modal"]);
        const currentOpenModal = this.store.getState().currentOpenModal;

        return !!modals.find(modal => modal.root.id === currentOpenModal);
    };

    // Sep 27, 2016
    // We spent a bunch of time trying to pull down the changes from Github in VS Code. We couldn't get it to work, so we ended up 
    // trashing the original project folder, and pulled down a new copy from github.
    // we created this modal curtain component and we are going to make it work in a smiliar way as in OLS project.
    // we are going to use the Redux store to track current open modal. Also need to create a reducer for current open modal.

</script>

<style scoped type="less">
    @import url('../../css/main.less');

    :scope {
        background: @trans-black;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        z-index: 10;
    }

    :scope.visible {
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>

</m-modal-curtain>