<m-quote-container>
    <button onclick={showNewQuoteForm}>
        Add new Quote
    </button>
    
    <m-quote-form></m-quote-form>

    <m-quote-list></m-quote-list>

    <script>

        this.on("mount", () => {            
            const quoteForm = this.tags["m-quote-form"].root;
            quoteForm.on("saveQuote cancelQuote", function () {
                quoteForm.trigger('hideQuoteForm');
            });
        });
        
        this.showNewQuoteForm = () => {
            this.tags['m-quote-form'].root.trigger('showQuoteForm');
        }
    </script>
</m-quote-container>