import React, { useState } from "react";
import Form from "./Components/Form";
import DisplayData from "./Components/DisplayData";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [storedData, setStoredData] = useState({});

  const handleSaveData = (data) => {
    setStoredData(data);
  };

  return (
    <div
      className="bg-gray-50 flex justify-center p-5"
      style={{ height: "100vh" }}
    >
      <div className="w-2/5 flex items-start justify-center bg-white shadow-sm mt-3 py-3 rounded-lg">
        {Object.keys(storedData).length > 0 ? (
          <DisplayData data={storedData} setStoredData={setStoredData} />
        ) : (
          <Form onSave={handleSaveData} />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
