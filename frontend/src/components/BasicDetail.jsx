import React from "react";

const BasicDetail = ({ data }) => {
  return (
    <>
      <div className="p-4 mx-4 bg-white shadow-md rounded-xl border">
        <h2 className="text-xl font-semibold mb-3">Basic Details</h2>
        <p>Name: {data.name}</p>
        <p>Mobile: {data.mobile}</p>
        <p>PAN: {data.pan || "N/A"}</p>
        <p>Credit Score: {data.creditScore}</p>
      </div>
    </>
  );
};

export default BasicDetail;
