const InvestmentTableItem = ({ yearly }) => {
  const valueHandler = (value) => {
    return (+value.toFixed(2)).toLocaleString();
  };

  return (
    <tr>
      <td>{yearly.year}</td>
      <td>${valueHandler(yearly.savingsEndOfYear)}</td>
      <td>${valueHandler(yearly.yearlyInterest)}</td>
      <td>${valueHandler(yearly.totalInterest)}</td>
      <td>${valueHandler(yearly.investedCapital)}</td>
    </tr>
  );
};

export default InvestmentTableItem;
