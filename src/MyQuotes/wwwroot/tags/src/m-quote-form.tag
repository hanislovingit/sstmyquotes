<m-quote-form class="hidden">
    <form id="quoteGreatForm">
        <fieldset>
            <legend>Add/Edit Quote</legend>
            <label for="txtQuote">
            Quote
            <textarea name="txtQuote" id="txtQuote" placeholder="type your quote here..." value={opts.dataQuote.text}></textarea>

            </label>
            <label for="txtQuoteAuthor">
            Author
            <input id="txtQuoteAuthor" type="text" name="txtQuoteAuthor" placeholder="type author name here..." value={opts.dataQuote.author} />
            </label>
            <label for="txtNotes">
            Notes
            <textarea name="txtNotes" id="txtNotes" placeholder="type some notes here..." value={opts.dataQuote.notes}></textarea>

            </label>
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

            <div class="flex-container">
                <button type="button" class="btn-secondary" onclick={cancel}>Cancel</button>
                <button type="button" class="btn-primary" onclick="{save}">Save</button>
            </div>
        </fieldset>
    </form>
    <style scoped type="less">
        @import url('../../css/main.less');

        :scope {
            display: block;
            padding: 0 1rem;
            height: auto;
            max-height: 44rem;
            margin: 1rem 0;
            overflow: hidden;
            transition: max-height @transition;
            background: @lightgray;
        }
        
        :scope.hidden {
            max-height: 0;
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
        
        textarea {
            min-height: 12rem;
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
        }
    </style>

    <script>
        this.mixin('redux');
        this.mixin('actions');
        riot.observable(this.root);

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

            const action = this.opts.dataQuote ? this.editQuote(quote) : this.addQuote(quote);
            this.store.dispatch(action);
            this.root.trigger("saveQuote");
            this.clearForm();
        }

        this.cancel = () => {
            this.clearForm();
            this.root.trigger("cancelQuote");
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

        this.root.on('hideQuoteForm', () => {
            this.root.classList.add("hidden");
        });

        this.root.on('showQuoteForm', () => {
            this.root.classList.remove("hidden");
        });
    </script>

</m-quote-form>