import React, { useState } from "react";

import styles from "./InvestmentForm.module.css";

const initialInput = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};

const InvestmentForm = ({ onResultCalculation }) => {
  const [userInput, setUserInput] = useState(initialInput);

  const handleUserInputChange = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: +value };
    });
  };

  const calculateHandler = (event) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    event.preventDefault();

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    let totalInterest = 0;
    let investedCapital = currentSavings;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      totalInterest += yearlyInterest;
      investedCapital += yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      });
    }

    onResultCalculation(yearlyData);

    // do something with yearlyData ...
  };

  const resetHandler = () => {
    setUserInput(initialInput);
    onResultCalculation([]);
  };

  return (
    <form className={styles.form} onSubmit={calculateHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings (₹)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) =>
              handleUserInputChange("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              handleUserInputChange("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              handleUserInputChange("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) =>
              handleUserInputChange("duration", event.target.value)
            }
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
