
export default (currentState = null, action) => {

    switch (action.type) {
        case "OPEN_MODAL":
            return action.id;
        case "CLOSE_MODAL":
            return null;
        default:
            return currentState;        
    }
}