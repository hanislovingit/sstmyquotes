<m-quote >
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

        // made good progress today on the layout of quote list for all screen sizes.
        // We ended up ditching flex and used regular css width percentages and some media queries.
        // We started working on formatting the quote card to make it look good. 
        // Next we need to find a good font family for the quote marks.
        blockquote {
            height: 10rem;
            //overflow: hidden;
            
        }

        blockquote:before,
        blockquote:after {
            font-size: 4rem;
            color: @lightgray;
            font-family: 'Georgia', serif;
        }

        blockquote:before {
            content: open-quote;
        }

        blockquote:after {
            content: close-quote;
        }

        cite {
            display: block;
            text-align: right;
        }

        cite:before {
            content: "~";
            padding-right: 0.3rem;
        }

    </style>
    
    <script>
        this.mixin("redux");
    </script>    
</m-quote>