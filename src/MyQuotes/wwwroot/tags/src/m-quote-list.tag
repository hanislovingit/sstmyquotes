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
            display: block;
        }

        ul li {
            //flex: 0 0 0;
            //min-width: 18rem;
            display: inline-block;
            width: 100%;
            border-radius: .6rem;
            box-shadow: 0 0 .6rem 0 #090a0a;
            padding: 1.2rem;
            margin: .6rem 0;
    }

// min-width means anything equal or bigger than the specified width will use these styles
// extra small devices, phones
// @media (min-width: 480px) {
//         ul li {
//             width: ~'calc(49% - 1rem)';
//             margin: 0.6rem;
//     }
// }

/* Small Devices, Tablets */
@media (min-width : 768px) {
    ul li {
        //width: ~'calc(33% - 1.33rem)';
            width: ~'calc(49% - 1rem)';
            margin: 0.6rem;
   }
}

/* Medium Devices, Desktops */
@media (min-width : 992px) {
    ul li {
        width: ~'calc(25% - 1.2rem)';
        max-width: 20rem;
  }
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
        this.on('update', () => this.quotes = this.store.getState().quotes);

        this.store.subscribe(this.update);            
    </script>
</m-quote-list>