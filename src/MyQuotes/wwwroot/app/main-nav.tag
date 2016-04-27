
console.log("logging from main-nav tag file");

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
    <button><i class="fa fa-nav-icon"></i></button>

    <style>
        main-nav li {
            display: inline-block;
        }
    </style>

    <script>
        this.on('mount', function() {
            console.log("logging from main-nav");
        });
    </script>
</main-nav>