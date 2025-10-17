const CreditAccounts = ({ accounts }) => {
  if (!accounts || accounts.length === 0)
    return <p>No credit accounts available.</p>;

  return (
    <div className="p-5 mx-4 bg-white shadow-md rounded-xl border">
      <h2 className="text-xl font-semibold mb-3">Credit Accounts</h2>
      {accounts.map((acc) => (
        <div key={acc._id} className="mb-4 p-3 border rounded-lg bg-gray-50">
          <p>
            {" "}
            <strong>Account Type:</strong> {acc.accountType}
          </p>
          <p>
            {" "}
            <strong>Bank Name:</strong> {acc.bankName}
          </p>
          <p>
            {" "}
            <strong>Account Number:</strong> {acc.accountNumber}
          </p>
          <p>
            {" "}
            <strong>Address:</strong> {acc.address}
          </p>
          <p>
            {" "}
            <strong>Amount Overdue:</strong> {acc.amountOverdue}
          </p>
          <p>
            {" "}
            <strong>Current Balance:</strong> {acc.currentBalance}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CreditAccounts;
