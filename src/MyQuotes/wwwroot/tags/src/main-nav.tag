<main-nav class="hidden">

    <div class="toggle-nav" onclick={toggleNav}><i></i></div>
    <ul>
       
        <li>
            <a href="/">
                <i class="fa fa-comments"></i> MynaQuotes
            </a>
        </li>
        <li>
           <span>My Quotes</span>
        </li>
       <li>
          <button type="button" class="btn btn-primary">
              <i class="fa fa-plus"></i> Add</button>
       </li>
       </ul>
        <span class="nav-heading">Filters<span>
    <ul>
        <li>
            <span><i class="fa fa-star"></i>Favorites</span>
        </li>
        <li>
            <span><i class="fa fa-archive"></i>Archive</span>
        </li>
        <li>
            <span><i class="fa fa-history"></i>Recent</span>
        </li>
       <li>
            <span><i class="fa fa-asterisk"></i>All</span>

       </li>
    </ul>
    <button type="button" class="btn btn-secondary btn-logout">
              <i class="fa fa-sign-out"></i> Logout</button>

    <style scoped type="less">
         @import url('../../css/main.less');

         :scope {
             position: absolute;
             //left: 100%;
             left: 0;
             top: 0;
             min-height: 100%;
             height: auto;
             width: 12rem;
             transition: all @transition;
             box-shadow: 2px 0 12px 0 @black;
             background: @white;
             padding-top: 2rem;
             overflow: visible;
             z-index: 2;
         }

         :scope.hidden {
             left: -12rem;
             box-shadow: none;
         }

         ul li {
             padding: .3rem 1rem;
         }

         ul li i {
             margin-right: 1rem;
         }

         .toggle-nav {
             position: absolute;
             top: 0.5rem;
             right: 1rem;
             transition: right @transition;
             z-index: 2;
             height: 2.5rem;
             padding: 0.5rem;
         }

         .toggle-nav i,
         .toggle-nav i:before,
         .toggle-nav i:after {
             display: inline-block;
             width: 1.6rem;
             height: 0.3rem;
             background: @black;
             position: relative;
             z-index: 2;
             border-radius: 1.3rem;
             opacity: 1;
             transition: all @transition;
             
             transform: rotate(-45deg);
             right: 0;
             top: 0.6rem;
         }

         .toggle-nav i:before {
             content: "";
             top: -0.25rem;
             right: 0;
             
             opacity: 0;
             transform: rotate(45deg);
         }

         .toggle-nav i:after {
             content: "";

             transform: rotate(90deg);
             top: -2.35rem;
             right: -0.05rem;
         }

         :scope.hidden .toggle-nav {
            right: -3.5rem;
         }

         :scope.hidden .toggle-nav i {
             transform: none;
             right: 0;
             top: 0;

         }

         :scope.hidden .toggle-nav i:before {
             opacity: 1;
             transform: none;
         }

         :scope.hidden .toggle-nav i:after {
             top: -1.25rem;
             right: 0;
             transform: none;
         }

    </style>

   <script>
       
       this.toggleNav = () => {
           
           this.root.classList.toggle("hidden");

       }



   </script>
</main-nav>