import React, { useState } from "react";
import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import Result from "./components/Result/Result";

function App() {
  const [results, setResults] = useState("");

  const handleResultData = (result) => {
    console.log(result);
    setResults(result);
    console.log(results);
  };

  return (
    <div>
      <Header />
      <InvestmentForm onResultCalculation={handleResultData} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Result resultData={results} />
    </div>
  );
}

export default App;
