import riot from "riot";
import {createStore, combineReducers} from "redux";
import riotReduxMixin from "riot-redux-mixin";
import "css/main.less!";
import "font-awesome";
import "tags/dist/main-nav";
import "tags/dist/m-quote-list";
import "tags/dist/m-quote";
import "tags/dist/m-quote-form";
import "tags/dist/m-quote-container";
import "tags/dist/m-modal-curtain";
import "tags/dist/m-modal";

// import reducers
import quotesReducer from "app/reducers/quotesReducer";
import searchReducer from "app/reducers/searchReducer";
import modalReducer from "app/reducers/modalReducer";



const actions = {
    addQuote: (newQuote) => ({type:'ADD_QUOTE', payload: newQuote}),
    editQuote: (quote) => ({type:'EDIT_QUOTE', payload: quote}) 
};


const combinedReducers = combineReducers({
    quotes: quotesReducer,
    searchReducer,
    currentOpenModal: modalReducer
});

const store = createStore(combinedReducers);

riot.mixin('redux', riotReduxMixin(store));
riot.mixin('actions', actions);
riot.mount("*");