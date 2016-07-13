﻿import riot from "riot";
import {createStore} from "redux";
import riotReduxMixin from "riot-redux-mixin";
import "/css/main.less!";
import "normalize.css/normalize.css!";
import "font-awesome/css/font-awesome.min.css!";
import "/tags/main-nav.tag!";
import "/tags/m-quote-list.tag!";
import "/tags/m-quote.tag!";
import "/tags/m-quote-form.tag!";
import "/tags/m-quote-container.tag!";

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

riot.mixin('redux', riotReduxMixin(store));
riot.mixin('actions', actions);
riot.mount("*");