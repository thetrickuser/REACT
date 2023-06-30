import React from "react";

import styles from "./Result.module.css";

const formatter = new Intl.NumberFormat("default", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Result = ({ resultData }) => {
  if (resultData.length === 0) {
    return (
      <p className={styles.fallback}>
        No investment found. Please enter data to calculate!
      </p>
    );
  } else {
    return (
      <div>
        <table className={styles.result}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {resultData.map((data) => (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.savingsEndOfYear)}</td>
                <td>{formatter.format(data.yearlyInterest)}</td>
                <td>{formatter.format(data.totalInterest)}</td>
                <td>{formatter.format(data.investedCapital)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Result;
