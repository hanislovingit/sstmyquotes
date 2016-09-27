import riot from "riot";
import {createStore} from "redux";
import riotReduxMixin from "riot-redux-mixin";
import "css/main.less!";
import "font-awesome";
import "tags/dist/main-nav";
import "tags/dist/m-quote-list";
import "tags/dist/m-quote";
import "tags/dist/m-quote-form";
import "tags/dist/m-quote-container";

const actions = {
    addQuote: (newQuote) => ({type:'ADD_QUOTE', payload: newQuote}),
    editQuote: (quote) => ({type:'EDIT_QUOTE', payload: quote}) 
}

const quotes = (currentState = [
    {id: 0, text: 'If today were the last day of your life, would you want to do what you are able to do today?', author:'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes:''},
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
            return currentState.map((quote) => {
                return (quote.id === action.payload.id) ? action.payload : quote;
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