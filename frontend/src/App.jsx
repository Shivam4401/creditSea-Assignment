import React from "react";
import UploadForm from "./components/UploadForm";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import ReportPage from "./components/ReportPage";

const App = () => {
  const [userId, setUserId] = useState(null);
  return (
    <>
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mt-8 ">
        CreditSea Report Dashboard
      </h1>
      <UploadForm onSuccess={(id) => setUserId(id)} />
      {userId && <ReportPage userId={userId} />}
    </>
  );
};

export default App;
