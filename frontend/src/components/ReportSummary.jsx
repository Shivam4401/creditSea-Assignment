const ReportSummary = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="p-4 mx-4 bg-white shadow-md rounded-xl border">
      <h2 className="text-xl font-semibold mb-3">Report Summary</h2>
      <p>
        {" "}
        <strong>Total Accounts:</strong> {summary.totalAccounts}
      </p>
      <p>
        {" "}
        <strong>Active Accounts:</strong> {summary.activeAccounts}
      </p>
      <p>
        {" "}
        <strong>Closed Accounts:</strong> {summary.closedAccounts}
      </p>
      <p>
        {" "}
        <strong>Current Balance:</strong> {summary.currentBalance}
      </p>
      <p>
        {" "}
        <strong>Secured Amount:</strong> {summary.securedAmount}
      </p>
      <p>
        {" "}
        <strong>Unsecured Amount:</strong> {summary.unsecuredAmount}
      </p>
      <p>
        {" "}
        <strong>Last 7 Days Enquiries:</strong> {summary.last7DaysEnquiries}
      </p>
    </div>
  );
};

export default ReportSummary;
