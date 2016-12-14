<main-nav class="hidden">

    <div class="toggle-nav" onclick={toggleNav}><i></i></div>
    <div class="logo">
        <a href="/">
            <i class="fa fa-comments"></i> MynaQuotes
        </a>
    </div>
    <ul class="menu">
        
        <li>
            <span><i class="fa fa-home"></i>Home</span>
        </li>
        <li>
            <span><i class="fa fa-star"></i>Favorites</span>
        </li>
        <li>
            <span><i class="fa fa-archive"></i>Archive</span>
        </li>
    </ul>


    <ul class="user">
        <li>
            <span><i class="fa fa-user"></i>Chuck</span>
        </li>
        <li>
            <span><i class="fa fa-sign-out"></i>Logout</span>
        </li>
    </ul>

    <style scoped type="less">
         @import url('../../css/main.less');

         :scope {
             position: absolute;
             left: 0;
             top: 0;
             min-height: 100%;
             height: auto;
             width: @nav-bar-width;
             transition: all @transition;
             box-shadow: @shadow;
             background: @white;
             padding: 4rem 1rem;
             overflow: visible;
             z-index: 2;
         }

         :scope.hidden {
             left: -@nav-bar-width;
             box-shadow: none;
         }

         ul li {
             padding: .3rem 0;
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
            position: absolute;
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

         .user {
             position: absolute;
             bottom: 0;
             left: 1rem;
             width: 100%;
         }

         /* desktop view styles */
         @media screen and (min-width: @ipad-width) {

             :scope:before {
                 content: "";
                 position: static;
                 display: block;
                 width: @nav-bar-width;
                 height: 100%;
             }

             :scope {
                 padding: 2rem 1rem;
             }

             /* scope.hidden is the default class */
             :scope.hidden {
                 left: 0;
                 box-shadow: @shadow;
                 position: fixed;
             }

             .toggle-nav {
                 display: none;
             }

         }

         
    </style>

   <script>
       
       this.toggleNav = () => {
           
           this.root.classList.toggle("hidden");

       }



   </script>
</main-nav>