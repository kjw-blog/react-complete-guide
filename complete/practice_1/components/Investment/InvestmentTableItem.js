const InvestmentTableItem = ({ yearly }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tr>
      <td>{yearly.year}</td>
      <td>{formatter.format(yearly.savingsEndOfYear)}</td>
      <td>{formatter.format(yearly.yearlyInterest)}</td>
      <td>{formatter.format(yearly.totalInterest)}</td>
      <td>{formatter.format(yearly.investedCapital)}</td>
    </tr>
  );
};

export default InvestmentTableItem;
