<m-quote >
    <blockquote>
        <yield/>
    </blockquote>
    <time>
        {opts.dataQuote.modifiedOn}
    </time>
    <div>
        <i class="fa fa-star hollow {opts.dataQuote.isFaved ? 'active' : '' }" onclick={toggleFav} />
        <i class="fa fa-archive hollow {opts.dataQuote.isArchived ? 'active' : '' }" onclick={toggleArchive} />
    </div>
    <cite>{opts.dataQuote.author}</cite>
    
    <style scoped type="less">
        @import url('../../css/main.less');

        :scope {
            background-color: @white;
            width: 100%;
        }

    </style>
    
    <script>
        this.mixin("redux");
    </script>    
</m-quote>