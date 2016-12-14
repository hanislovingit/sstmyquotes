<m-quote
    data-quote
 >

    <div class="quote-content" onclick={showQuote}>
        <blockquote>
            <yield/>
        </blockquote>
        <cite>{opts.dataQuote.author}</cite>
        
        <time>
            {opts.dataQuote.modifiedOn.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })}
        </time>
    </div>
    <div>
        <i class="fa fa-star hollow {opts.dataQuote.isFaved ? 'active' : '' }" onclick={toggleFav} />
        <i class="fa fa-archive hollow {opts.dataQuote.isArchived ? 'active' : '' }" onclick={toggleArchive} />
    </div>
    
    <style scoped type="less">
        @import url('../../css/main.less');

        :scope {
            width: 100%;
            display: block;
        }

        .quote-content {
            cursor: pointer;

        }

        blockquote {
            height: 10rem;
            overflow: hidden;
            
        }

        blockquote:before,
        blockquote:after {
            font-size: 4rem;
            color: @lightgray;
            font-family: 'Georgia', serif;
            line-height: 0.6rem;
            height: 0.3rem;
            display: inline-block;
            vertical-align: bottom;
        }

        blockquote:before {
            content: '\201c';
        }

        blockquote:after {
            content: '\201d';
        }

        cite {
            display: block;
            text-align: right;
        }

        cite:before {
            content: "~";
            padding-right: 0.3rem;
        }

        i {
            cursor: pointer;
        }

    </style>
    
    <script>
        this.mixin("redux");

        this.toggleFav = () => {
            const quote = this.opts.dataQuote;
            quote.isFaved = !quote.isFaved;
            this.store.dispatch({ 
                type: 'EDIT_QUOTE', 
                payload: quote 
            })
        };

        this.toggleArchive = () => {
            const quote = this.opts.dataQuote;
            quote.isArchived = !quote.isArchived;
            this.store.dispatch({ 
                type: 'EDIT_QUOTE', 
                payload: quote 
            })
        };

        this.showQuote = () => {
            const quote = this.opts.dataQuote;

            this.store.dispatch({
                type: "SELECT_QUOTE",
                payload: quote
            });

             this.store.dispatch({
                type: "OPEN_MODAL",
                id: "quote-form-modal"
            });

            // get the quote object clicked on, and assign it to the m-quote tag
            
        };
    </script>    
</m-quote>