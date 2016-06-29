<m-quote >
    <blockquote>
        <yield/>
    </blockquote>
    <time>
        {opts.dataQuote.modifiedOn}
    </time>
    <div>
        <i class="fa fa-archive {opts.dataQuote.isArchived ? 'active' : '' }" onclick={toggleArchive} />
        <i class="fa fa-star {opts.dataQuote.isFaved ? 'active' : '' }" onclick={toggleFav} />
    </div>
    <cite>{opts.dataQuote.author}</cite>
    
    <style scoped>
        :scope {
            border: 1px solid gray;
            background-color: lightblue;
            display: inline-block;
            min-width: 200px;
            max-width: 200px;
            border-radius: 5px;
        }
    </style>
    
    <script>
        this.mixin("redux");
    </script>    
</m-quote>