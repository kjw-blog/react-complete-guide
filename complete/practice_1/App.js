import { useState } from 'react';
import Header from './components/Header/Header';
import InvestmentForm from './components/Investment/InvestmentForm';
import InvestmentTable from './components/Investment/InvestmentTable';

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = ({
    currentSavings,
    yearlyContribution,
    expectedReturn,
    duration,
  }) => {
    const results = [];
    let totalInterest = 0;

    expectedReturn /= 100;
    let investedCapital = currentSavings;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital += yearlyContribution;

      totalInterest += yearlyInterest;

      results.push({
        year: i + 1,
        yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution,
        investedCapital,
        totalInterest,
      });
    }

    setYearlyData(results);
  };

  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={calculateHandler} />
      <InvestmentTable yearlyData={yearlyData} />
    </div>
  );
}

export default App;
