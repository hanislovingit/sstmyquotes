import $ from "jquery";
import riot from "riot";
import {createStore} from "redux";
import riotReduxMixin from "riot-redux-mixin";
//import "bootstrap/css/bootstrap.min.css!";
import {helloFromHome} from "./home";
import "/tags/main-nav.tag!";
import "/tags/m-quote-list.tag!";
import "/tags/m-quote.tag!";

const actions = {
    addQuote: (newQuote) => ({type:'ADD_QUOTE', payload: newQuote}),
    editQuote: (quote) => ({type:'EDIT_QUOTE', payload: quote}) 
}

const quotes = (currentState = [
    {id: 0, text: 'my nifty quote', author:'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes:''},
    {id: 1, text: 'my spifffy quote', author:'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes:''},
    {id: 2, text: 'my neat quote', author:'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes:''},
    {id: 3, text: 'my favorite quote', author:'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes:''},        
], action) => {
    switch(action.type) {
        // Actions
        // ----------------------
        // ADD_QUOTE
        // EDIT_QUOTE
        // 
        case "ADD_QUOTE":
            return [...currentState, action.payload];
        case "EDIT_QUOTE":
            return currenState.map((quote) => {
                return (quote.id === action.payload.id) ? payload : quote;
            })
        default:
            return currentState;        
    }
}

const searchReducer = (currentState = "", action) => {
    
}

const store = createStore(quotes);

const quote = {
    id: 1,
    text: "my great quote",
    author: "Mark twain",
    createdOn: new Date(),
    modifiedOn: null,
    isArchived: false,
    isFaved: false,
    notes: ""
}

const action = {
    type: "ADD_QUOTE",
    payload: { }    // quote obj
    
}

// $(function () {
//     console.log("logging from jquery dom ready in main.js file!");
//     helloFromHome("logging from home module");
// });

riot.mixin('redux', riotReduxMixin(store));
riot.mixin('actions', actions);
riot.mount("*");