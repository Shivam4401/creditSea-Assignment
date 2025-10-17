import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { serverDataContext } from "../context/serverContex";

const UploadForm = ({ onSuccess }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { serverUrl } = useContext(serverDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return toast.warning("Please select an XML file!");

    const formData = new FormData();
    formData.append("xmlFile", file);

    try {
      setLoading(true);
      const res = await axios.post(`${serverUrl}/api/upload`, formData);
      toast.success("✅ File uploaded successfully!");
      onSuccess && onSuccess(res.data.userId);
      setFile(null);
      console.log("result", res);
      console.log("data", res.data);
      console.log("userId", res.data.userId);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || "File upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8 mt-10 border border-gray-100">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
        Upload Credit Report (XML)
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <input
          type="file"
          accept=".xml"
          className="w-full sm:flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          type="submit"
          disabled={loading}
          className={`px-5 py-2 rounded-lg cursor-pointer font-medium transition-all duration-200 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Upload File"}
        </button>
      </form>

      {file && (
        <p className="mt-4 text-sm text-center text-gray-600">
          Selected File: <span className="font-medium">{file.name}</span>
        </p>
      )}
    </div>
  );
};

export default UploadForm;
