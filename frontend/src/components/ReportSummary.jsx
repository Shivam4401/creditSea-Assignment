const ReportSummary = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="p-4 mx-4 bg-white shadow-md rounded-xl border">
      <h2 className="text-xl font-semibold mb-3">Report Summary</h2>
      <p>Total Accounts: {summary.totalAccounts}</p>
      <p>Active Accounts: {summary.activeAccounts}</p>
      <p>Closed Accounts: {summary.closedAccounts}</p>
      <p>Current Balance: {summary.currentBalance}</p>
      <p>Secured Amount: {summary.securedAmount}</p>
      <p>Unsecured Amount: {summary.unsecuredAmount}</p>
      <p>Last 7 Days Enquiries: {summary.last7DaysEnquiries}</p>
    </div>
  );
};

export default ReportSummary;
