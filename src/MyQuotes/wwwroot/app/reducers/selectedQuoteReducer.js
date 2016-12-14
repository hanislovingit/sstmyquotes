export default (currentState = null, action) => {

    switch (action.type) {
        case "SELECT_QUOTE":
            return action.payload;
        case "CLEAR_QUOTE":
            return null;
        default:
            return currentState;        
    }
}