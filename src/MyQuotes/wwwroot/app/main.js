import $ from "jquery";
import riot from "riot";

import {helloFromHome} from "./home";
import "/tags/main-nav.tag!";
import "/tags/quote.tag!";

$(function () {
    console.log("logging from jquery dom ready in main.js file!");
    helloFromHome("logging from home module");
    riot.mount("*");
});