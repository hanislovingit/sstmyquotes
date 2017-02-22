
const initialState = [
    {id: 0, text: 'If today were the last day of your life, would you want to do what you are able to do today?', author:'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes:''},
    {id: 1, text: 'my spifffy quote', author:'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes:''},
    {id: 2, text: 'my neat quote', author:'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes:''},
    {id: 3, text: 'my favorite quote', author:'ME!!', createdOn: new Date(), modifiedOn: new Date(), isArchived: false, isFaved: false, notes:''},        
];

export default (currentState = initialState, action) => {
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
            });
        default:
            return currentState;        
    }
};