import Style from './InvestmentTable.module.css';
import InvestmentTableHead from './InvestmentTableHead';
import InvestmentTableItem from './InvestmentTableItem';

/**
 * 작업: 아래 표를 조건부로 표시(결과 데이터가 있는 경우에만 해당)
 * 사용 가능한 데이터가 없는 경우 폴백 텍스트 표시
 */
const InvestmentTable = ({ yearlyData }) => {
  if (yearlyData.length === 0) {
    return <p className={Style['no-data']}>No investment calculated yet.</p>;
  }

  return (
    <table className={Style.result}>
      <InvestmentTableHead />
      <tbody>
        {yearlyData.map((yearly) => (
          <InvestmentTableItem key={yearly.year} yearly={yearly} />
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentTable;
