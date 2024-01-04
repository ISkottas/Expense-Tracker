import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

function Balance() {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    //It uses the reduce method to calculate the sum of an array of amounts and then applies toFixed(2) to round the result to two decimal places.
    const total = amounts.reduce((acc,item) => (acc += item), 0);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Balance