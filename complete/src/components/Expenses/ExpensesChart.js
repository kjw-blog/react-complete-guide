import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: '1월', value: 0 },
    { label: '2월', value: 0 },
    { label: '3월', value: 0 },
    { label: '4월', value: 0 },
    { label: '5월', value: 0 },
    { label: '6월', value: 0 },
    { label: '7월', value: 0 },
    { label: '8월', value: 0 },
    { label: '9월', value: 0 },
    { label: '10월', value: 0 },
    { label: '11월', value: 0 },
    { label: '12월', value: 0 },
  ];

  // 1.props의 expenses배열 안에 객체들로 for문을 돌린다.
  for (const expense of props.expenses) {
    // 객체의 Month값을 가져온다.
    // getMonth()함수는 해당 월보다 -1로 나옴 ex) new Date('2023-07-23').getMonth() === 6
    const expenseMonth = expense.date.getMonth();

    // Month값을 index로 chartDataPoints의 value에 해당 객체의 가격을 추가해준다.
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
