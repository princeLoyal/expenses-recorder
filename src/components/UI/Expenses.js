import './Expenses.css';
import ExpenseItems from './ExpenseItem';
import ExpenseForm from '../Expenses/ExpenseForm';
function Expenses(props){
    const {items} = props;
    return(
        <div>
            <ExpenseForm onAddExpenses={props.onAddExpenses}/>
            <div className='expenses'>
                <ExpenseItems expenseTitle={items[0].title}
                    expenseAmount = {items[0].amount}
                    expenseDate = {items[0].date}
                    />
                <ExpenseItems expenseTitle={items[1].title}
                expenseAmount = {items[1].amount}
                expenseDate = {items[1].date}
                />
                <ExpenseItems expenseTitle={items[2].title}
                expenseAmount = {items[2].amount}
                expenseDate = {items[2].date}
                />
            </div>
        </div>
    )
}
export default Expenses;