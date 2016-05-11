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
        this.quotes = this.store.getState();
        console.log(this.quotes);
    </script>
</m-quote-list>