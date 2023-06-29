import React from "react";

import styles from "./Result.module.css";

const Result = ({ resultData }) => {
  if (resultData.length === 0) {
    return <p className={styles.fallback}>No data found</p>;
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
                <td>{data.savingsEndOfYear}</td>
                <td>{data.yearlyInterest}</td>
                <td>{data.totalInterest}</td>
                <td>{data.investedCapital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Result;
