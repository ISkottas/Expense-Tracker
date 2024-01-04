import { createContext, useReducer } from "react";
import AppReducer from './AppReducer';


// initial state
const initialState = {
    transactions: []
}

// create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //We make an action for our AppReducer we want to change the initalState and send the new state if we click the x button
    //With dispatch we send something to our AppReducer. something with type (for a case) and payload(id) => (it keeps the id of the item that we did an action and we use it in the AppReducer)
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    // Action for adding a transaction via AppReducer
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    );
}