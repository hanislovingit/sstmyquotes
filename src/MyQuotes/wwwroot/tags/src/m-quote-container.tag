<m-quote-container>

    <m-modal-curtain>
        <m-modal data-modal-title="Add/Edit Quote" id="quote-form-modal">
            <m-quote-form data-quote={parent.parent.selectedQuote}></m-quote-form>
        </m-modal>        
    </m-modal-curtain>


    <main-nav></main-nav>

    <header>{filterName}</header>

    <i class="fa fa-plus interactive add-icon" onclick={toggleQuoteForm}></i>

    <m-quote-list></m-quote-list>

    <style scoped type="less">
         @import url('../../css/main.less');

        :scope {
            position: relative;
            padding: 2rem;
            min-height: 100%;
            display: block;
        }

        .add-icon {
            position: absolute;
            top: 1rem;
            right: 1rem;

        }
        
        header {
            text-align: center;
        }

         @media screen and (min-width: @ipad-width) {
            :scope {
                margin-left: @nav-bar-width;
            }            
         }
    </style>

    <script>
        // create the modal quote form for add/edit/read of a quote. The modal will take up
        // the whole view port on a mobile view, and a fixed size on desktop view.
        // Today we decided that this app will just have one html page, but has 2 views:
        // The quote list view and the add/edit/read quote view. 
        // We will use contentEditable for editing a quote. We do this by adding css styles
        // to the contentEditable html elements to make them obvious to the user that 
        // those contents are editable.

        this.mixin("redux");
        this.store.subscribe(this.update);

        this.filterName = "Recent";

        this.on("mount", () => {            
            //this.quoteForm = this.tags["m-quote-form"].root;

            // this.quoteForm.on("saveQuote cancelQuote", function () {
            //     this.quoteForm.trigger('toggleQuoteForm');
            // });

        });

        this.on("update", () => {
            this.selectedQuote = this.store.getState().selectedQuote;
        });
        
        this.toggleQuoteForm = () => {

            this.store.dispatch({
                type: "OPEN_MODAL",
                id: "quote-form-modal"
            });

            //this.quoteForm.trigger('toggleQuoteForm');
        }



    </script>
</m-quote-container>
