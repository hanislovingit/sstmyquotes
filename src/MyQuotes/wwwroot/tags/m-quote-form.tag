<m-quote-form>
    <label for="txtQuote">
        Quote
        <textarea name="txtQuote" id="txtQuote" placeholder="type your quote here..." value={opts.dataQuote.text}></textarea>

    </label>
    <label for="txtQuoteAuthor">
        Author
        <input type="text" name="txtQuoteAuthor" placeholder="type author name here..." value={opts.dataQuote.author} />
    </label>
    <label for="txtNotes">
        Notes
        <textarea name="txtNotes" id="txtNotes" placeholder="type some notes here..." value={opts.dataQuote.notes}></textarea>

    </label>
    <div class="flex-container">
        <label for="chkFav" class="inline">
            Favorite
            <input type="checkbox" name="chkFav" checked={opts.dataQuote.isFaved} />
        </label>
        <label for="chkArchive" class="inline">
            Archive
            <input type="checkbox" name="chkArchive" checked={opts.dataQuote.isArchived} />
        </label>
    </div>

    <input type="hidden" name="quoteId" id="quoteId" value={opts.dataQuote.id || store.getState().length} />
    <input type="hidden" name="createdOn" value="{opts.dataQuote.createdOn}" />

    <div class="flex-container">
        <button type="button">Cancel</button>
        <button type="button" onclick="{saveQuote}">Save</button>
    </div>

    <style scoped>
        :scope {
            display: block;
            padding: 15px;
        }

        label {
            display: block;
            margin-bottom: 10px;
        }

        input,
        textarea {
            width: 100%;
            display: block;
            border-radius: 5px;
            border: 1px solid gray;
            -webkit-appearance: none;
            box-shadow: inset 0 0 15px -7px black;
            line-height: 1.6em;
            padding: 7px;
        }

        textarea {
            min-height: 200px;
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

        this.saveQuote = () => {
            // construst the quote obj
            // we already have our action creator
            // dispatch ADD_QUOTE action
            const quote = {
                text: this.txtQuote.value,
                author: this.txtQuoteAuthor.value,
                isArchived: this.chkArchive.checked,
                isFaved: this.chkFav.checked,
                notes: this.txtNotes.value,
                createdOn: this.createdOn || new Date(),
                modifiedOn: new Date(),
                id: this.quoteId
            };

            const action = this.opts.dataQuote ? this.editQuote(quote) : this.addQuote(quote);
            this.store.dispatch(action);
        };
    </script>

</m-quote-form>