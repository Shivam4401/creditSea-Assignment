import React from "react";
import axios from "axios";
import BasicDetail from "./BasicDetail";
import ReportSummary from "./ReportSummary";
import CreditAccounts from "./CreditAccounts";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { serverDataContext } from "../context/serverContex";
import Loader from "./Loader";

const ReportPage = ({ userId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { serverUrl } = useContext(serverDataContext);

  useEffect(() => {
    async function fetchReport() {
      try {
        setLoading(false);
        const res = await axios.get(`${serverUrl}/api/report/${userId}`);
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.error("error fetching data");
      } finally {
        setLoading(false);
      }
    }
    if (userId) fetchReport();
  }, [userId, serverUrl]);

  if (loading) return <Loader />;

  if (!data) return <p className="text-center mt-6">No report data found.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-8 flex flex-col gap-6">
      <BasicDetail data={data.basicDetails} />
      <ReportSummary summary={data.reportSummary} />
      <CreditAccounts accounts={data.creditAccounts} />
    </div>
  );
};

export default ReportPage;
