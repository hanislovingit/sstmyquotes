<m-quote-list>  
    <ul>
        <li each={quote in quotes}>
         <m-quote data-quote={quote}>
             {quote.text}
         </m-quote>
        </li>
    </ul>
    
    <style scoped type="less">
 @import url('../../css/main.less');

        :scope {
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        ul li {
            flex: 1 1 0;
            min-height: 12rem;
            min-width: 18rem;
            width: 18rem;
            max-width: 24rem;
            border-radius: .6rem;
            box-shadow: 0 0 .6rem 0 #090a0a;
            padding: .6rem;
            margin: .6rem;
        }

    </style>


    <script>
        // note on Aug 30, 2016
        // we played with styling the list of quotes using flex. We made good progress
        // with the grid of quotes, but didn't get it perfect. We need to know flexbox
        // a little better. But for now, it might be good enough.
        // 
        this.mixin('redux');
        this.mixin('actions');
        this.on('update', () => this.quotes = this.store.getState());

        this.store.subscribe(this.update);            
    </script>
</m-quote-list>