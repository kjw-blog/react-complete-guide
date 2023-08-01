import Style from './InvestmentForm.module.css';

import InputGroupCard from '../UI/InputGroupCard';
import Button from '../UI/Button';
import { useState } from 'react';

const InvestmentForm = ({ onCalculate }) => {
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [yearlyContribution, setYearlyContribution] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [duration, setDuration] = useState(10);

  const currentSavingsHandler = (e) => {
    setCurrentSavings(+e.target.value);
  };
  const yearlyContributionHandler = (e) => {
    setYearlyContribution(+e.target.value);
  };

  const expectedReturnHandler = (e) => {
    setExpectedReturn(+e.target.value);
  };

  const durationHandler = (e) => {
    setDuration(+e.target.value);
  };
  const resetHandler = () => {
    setCurrentSavings(10000);
    setYearlyContribution(1200);
    setExpectedReturn(7);
    setDuration(10);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userInput = {
      currentSavings,
      yearlyContribution,
      expectedReturn: expectedReturn,
      duration,
    };

    onCalculate(userInput);
  };

  return (
    <form
      className={Style.form}
      onSubmit={submitHandler}
      onReset={resetHandler}
    >
      <InputGroupCard>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={currentSavings}
            onChange={currentSavingsHandler}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={yearlyContribution}
            onChange={yearlyContributionHandler}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </InputGroupCard>
      <InputGroupCard>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={expectedReturn}
            onChange={expectedReturnHandler}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={duration}
            onChange={durationHandler}
            type="number"
            id="duration"
          />
        </p>
      </InputGroupCard>
      <p className={Style.actions}>
        <Button text="Reset" type="reset" className={Style.buttonAlt} />
        <Button text="Calculate" type="submit" className={Style.button} />
      </p>
    </form>
  );
};

export default InvestmentForm;
