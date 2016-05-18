<m-quote-form data-quote>
    <label for="txtQuote">Quote
        <textarea name="txtQuote" id="txtQuote" cols="30" rows="10" placeholder="type your quote here..." value={opts.dataQuote.text}></textarea>
    
    </label>
    <label for="txtQuoteAuthor">Author
        <input type="text" name="txtQuoteAuthor" placeholder="type author name here..." value={opts.dataQuote.author} />
    </label>
    <label for="txtNotes">Notes
        <textarea name="txtNotes" id="txtNotes" cols="30" rows="10" placeholder="type some notes here..." value={opts.dataQuote.notes}></textarea>
    
    </label>
    <label for="chkFav">Favorite
        <input type="checkbox" name="chkFav" checked={opts.dataQuote.isFaved} />
    </label>
    <label for="chkArchive">Archive
        <input type="checkbox" name="chkArchive" checked={opts.dataQuote.isArchived} />
    </label>
    
    <input type="hidden" name="quoteId" id="quoteId" value={opts.dataQuote.id || store.getState().length} />
    <input type="hidden" name="createdOn" value="{opts.dataQuote.createdOn}" />
    
    <button type="button">Cancel</button>
    <button type="button" onclick="{saveQuote}">Save</button>
    
    
    <style scoped>
        :scope {
            width: 90%;
            display: block;
        }
        
        label {
            width: 100%;
            display: block;
        }
        
        input, textarea {
            display: block;
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
                id: this.quoteId,      
            }
            const action = this.opts.dataQuote ? editQuote(quote) || addQuote(quote);
            this.store.dispatch(action);
        }


        
    </script>  
    
</m-quote-form>