import React from "react";

import styles from "./Results.module.css";
import Card from "./Card";

const Results = ({ data }) => {
  console.log(data);
  return (
    <Card className={styles.users}>
      <ul>
        {data.map((item) => (
          <li>
            {item.username} {item.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Results;
