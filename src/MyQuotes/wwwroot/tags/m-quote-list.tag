<m-quote-list>  
    <ul>
        <li each={quote in quotes}>
         <m-quote data-quote={quote}>
             {quote.text}
         </m-quote>
        </li>
    </ul>
    
    <script>
        this.mixin('redux');
        this.mixin('actions');
        this.on('update', () => this.quotes = this.store.getState());

        this.store.subscribe(this.update);            
    </script>
</m-quote-list>