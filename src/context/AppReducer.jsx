export default (state, action) => {
    switch(action.type){
        // we want to send a copy of all transactions from the initialState( with this ...state we get the copy of the initialState) except the one that was deleted and we want to return the new state
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                /* we want the transactions from the initialState so we take this with spread operator ...state.transactions and 
                we want also the extra transaction that we added from the payload */
                transactions: [action.payload,...state.transactions]
            }
        default: 
            return state;
    }
}