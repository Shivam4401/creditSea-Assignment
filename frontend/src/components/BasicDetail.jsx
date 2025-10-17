import React from "react";

const BasicDetail = ({ data }) => {
  return (
    <>
      <div className="p-4 mx-4 bg-white shadow-md rounded-xl border">
        <h2 className="text-xl font-semibold mb-3">Basic Details</h2>
        <p>
          {" "}
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          {" "}
          <strong>Mobile: </strong> {data.mobile}
        </p>
        <p>
          {" "}
          <strong>PAN: </strong> {data.pan || "N/A"}
        </p>
        <p>
          {" "}
          <strong>Credit Score:</strong> {data.creditScore}
        </p>
      </div>
    </>
  );
};

export default BasicDetail;
