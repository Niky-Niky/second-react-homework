import Transactions from "../Transactions-history/Transactions-history.json";
import TransactionRow from "../TransactionRow/TransactionRow";

function Tbody (){
    return(
        <tbody>
{Transactions.map((transaction) => (
          <TransactionRow key={transaction.id} {...transaction} />
        ))}
        </tbody>
    )
};

export default Tbody;