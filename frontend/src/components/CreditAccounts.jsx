const CreditAccounts = ({ accounts }) => {
  if (!accounts || accounts.length === 0)
    return <p>No credit accounts available.</p>;

  return (
    <div className="p-5 mx-4 bg-white shadow-md rounded-xl border">
      <h2 className="text-xl font-semibold mb-3">Credit Accounts</h2>
      {accounts.map((acc) => (
        <div key={acc._id} className="mb-4 p-3 border rounded-lg bg-gray-50">
          <p>Account Type: {acc.accountType}</p>
          <p>Bank Name: {acc.bankName}</p>
          <p>Account Number: {acc.accountNumber}</p>
          <p>Address: {acc.address}</p>
          <p>Amount Overdue: {acc.amountOverdue}</p>
          <p>Current Balance: {acc.currentBalance}</p>
        </div>
      ))}
    </div>
  );
};

export default CreditAccounts;
