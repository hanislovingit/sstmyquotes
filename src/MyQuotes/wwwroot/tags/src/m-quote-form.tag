<m-quote-form
    data-quote
>
    <form id="quoteGreatForm">
        <m-quote-field data-label="Quote" data-value={opts.dataQuote.text} data-placeholder="Enter quote here..."></m-quote-field>
        
        <m-quote-field data-label="Author" data-value={opts.dataQuote.author} data-is-single-line="true" data-placeholder="Enter author here..."></m-quote-field>
        
        <m-quote-field data-label="Notes" data-value={opts.dataQuote.notes} data-placeholder="Enter notes here about the quote..."></m-quote-field>

        <div class="flex-container">
            <label for="favCtrl" class="inline" onclick={toggleFav}>
            Favorite
            <input type="hidden" name="favCtrl" id="favCtrl" value={isFaved ? "true" : "false" } />
            <i class="fa fa-star hollow {isFaved ? 'active' : '' }" />
            </label>
            <label for="archiveCtrl" class="inline" onclick={toggleArchive}>
            Archive
            <input type="hidden" name="archiveCtrl" id="archiveCtrl" value={isArchived ? "true" : "false" }  />
            <i class="fa fa-archive hollow {isArchived ? 'active' : '' }" />
            </label>
        </div>

        <input type="hidden" name="quoteId" id="quoteId" value={opts.dataQuote.id || store.getState().length} />
        <input type="hidden" name="createdOn" value="{opts.dataQuote.createdOn}" />

        <div class="flex-container btn-container">
            <button type="button" class="btn-secondary" onclick={cancel}>Cancel</button>
            <button type="button" class="btn-primary" onclick="{save}">Save</button>
        </div>
    </form>
    <style scoped type="less">
        @import url('../../css/main.less');

        :scope {
            display: block;
            overflow: hidden;
            transition: max-height @transition;
            background: @lightgray;
            height: ~"calc(100% - 1.55rem)";
        }
        
        :scope.hidden {
            max-height: 0;
        }
        
        form {
            height: 100%;
        }

        label {
            display: block;
            margin-bottom: 1rem;
        }
        
        input,
        textarea {
            width: 100%;
            display: block;
            border-radius: .3rem;
            border: 1px solid gray;
            -webkit-appearance: none;
            box-shadow: inset 0 0 15px -7px black;
            padding: .6rem;
        }
        
        .quote-content {
            min-height: 12rem;
            border: 1px solid @black;
            border-radius: 0.3rem;
            padding: 0.6rem;
        }

            .quote-content:focus {
                background: @white;
            }
        
        input[type="checkbox"] {
            width: 20px;
            height: 20px;
            display: inline-block;
        }
        
        label.inline {
            display: inline-block;
            width: auto;
        }
        
        .flex-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .btn-container {
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 1rem;
     }
    </style>

    <script>
        this.mixin('redux');
        this.mixin('actions');
        //riot.observable(this.root);

        this.save = () => {
            // construst the quote obj
            // we already have our action creator
            // dispatch ADD_QUOTE action
            const quote = {
                text: this.txtQuote.value,
                author: this.txtQuoteAuthor.value,
                isArchived: this.isArchived,
                isFaved: this.isFaved,
                notes: this.txtNotes.value,
                createdOn: this.createdOn || new Date(),
                modifiedOn: new Date(),
                id: this.quoteId
            };

            // this.editQuote and this.addQuote are brought in by "actions" mixin
            const action = this.opts.dataQuote ? this.editQuote(quote) : this.addQuote(quote);
            this.store.dispatch(action);
            this.clearForm();
            this.store.dispatch({
                type: "CLOSE_MODAL",                
            });
        }

        this.cancel = () => {
            this.clearForm();
            this.store.dispatch({
                type: "CLOSE_MODAL",                
            });
        }

        this.clearForm = () => {
            this.quoteGreatForm.reset();
            
            // Because this fields value get turned into a literal interpretation of {...} 
            // if we don't clear it manually.  Cause is unknown.
            this.txtQuoteAuthor.value = '';
            this.isFaved = false;
            this.isArchived = false;
        }

        this.toggleFav = () => {
            this.isFaved = !this.isFaved;
        }

        this.toggleArchive = () => {
            this.isArchived = !this.isArchived;
        }

        // this.root.on('toggleQuoteForm', () => {
        //     this.root.classList.toggle("hidden");
        // });

        this.onContentEditableFocus = (event) => {
            let isNewQuote = !this.opts.dataQuote;

            if(isNewQuote) {
                event.target.innerHTML = "";
            }
        }

        this.onContentEditableBlur = (event) => {
            if(!event.target.innerHTML) {
                event.target.innerHTML = event.target.dataset.placeholder;
            }
        }


    </script>

</m-quote-form>