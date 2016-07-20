<main-nav>
    <ul>
        <li>
            <a href="/AllQuotes">All</a>
        </li>
        <li>
            <a href="/FavoriteQuotes">Favorites</a>
        </li>
        <li>
            <a href="/ArchiveQuotes">Archive</a>
        </li>
    </ul>

    <style scoped type="less">
         @import url('../../css/main.less');

         :scope {
             position: absolute;
             //left: 100%;
             right: 0;
             top: 0;
             min-height: 100%;
             height: auto;
             transition: right @transition;
             box-shadow: 2px 0 12px 0 @black;
             background: @trans-white;
         }

         .hidden {
             right: -100%;

         }

         
    </style>

    
</main-nav>