import './ExpenseItem.css';

function ExpenseItem() {
  /** react 기능이 아닌 일반적인 js 문법이다. */
  const expenseDate = new Date(2023, 6, 3);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
