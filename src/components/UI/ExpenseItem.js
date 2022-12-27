import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
function ExpenseItems(props){
    const {expenseDate, expenseTitle, expenseAmount} = props;
    return (
        <Card className='expense-item'>
                <ExpenseDate expenseDate={expenseDate}/>
                <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                </div>
                <div className='expense-item__price'>{expenseAmount}</div>
                
        </Card>
    )
}
export default ExpenseItems;