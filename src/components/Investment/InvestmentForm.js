import Style from './InvestmentForm.module.css';

import InputGroupCard from '../UI/InputGroupCard';
import Button from '../UI/Button';

const InvestmentForm = () => {
  return (
    <form className={Style.form}>
      <InputGroupCard>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </InputGroupCard>
      <InputGroupCard>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
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
