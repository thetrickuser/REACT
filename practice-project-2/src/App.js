import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Results from "./components/Results";

function App() {
  const [userData, setUserData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAddUser = (data) => {
    setUserData((prevData) => [...prevData, data]);
    setShowResults(true);
  };

  // if (userData === "") {
  //   setShowResults(false);
  // }

  return (
    <React.Fragment>
      <InputForm onAddUser={handleAddUser} />
      {!showResults && <p>Please enter any data</p>}
      {showResults && <Results data={userData} />}
    </React.Fragment>
  );
}

export default App;
