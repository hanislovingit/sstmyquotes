<m-quote >
    <blockquote>
        <yield/>
    </blockquote>
    <time>
        {opts.dataModifiedOn}
    </time>
    <div>
        <m-archive-icon data-archived={opts.dataArchived} />
        <m-fav-icon data-faved={opts.dataFaved} />
    </div>
    <cite>{opts.dataAuthor}</cite>
    
    <style scoped>
        :scope {
            border: 1px solid gray;
            width: 300px;
            height: 300px;
            display: block;
        }
    </style>
    
    <script>
    
    </script>    
</m-quote>