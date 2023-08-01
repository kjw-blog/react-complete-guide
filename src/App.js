import Header from './components/Header/Header';
import InvestmentForm from './components/Investment/InvestmentForm';
import InvestmentTable from './components/Investment/InvestmentTable';

function App() {
  const calculateHandler = (userInput) => {
    // 양식을 제출할 때 트리거해야 합니다.
    // 양식에 있는 제출 이벤트에 직접 바인딩하지 않을 수도 있습니다...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // 이 입력 개체의 모양을 자유롭게 변경하십시오!
    const yearlyContribution = +userInput['yearly-contribution']; // 언급된 바와 같이: 자유롭게 모양을 변경하십시오...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // 아래 코드는 연간 결과를 계산합니다.
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // 어레이에 푸시된 데이터의 모양을 자유롭게 변경하십시오!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // 연간 데이터로 작업 수행...
  };

  return (
    <div>
      <Header />
      <InvestmentForm />
      <InvestmentTable />
    </div>
  );
}

export default App;
