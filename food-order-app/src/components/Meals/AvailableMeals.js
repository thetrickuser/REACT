import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://react-http-c3d55-default-rtdb.firebaseio.com/meals.json"
        );
        const responseData = await response.json();
        const loadedMeals = [];
        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            price: responseData[key].price,
            desc: responseData[key].desc,
          });
        }
        setMeals(loadedMeals);
      } catch (err) {
        setError({
          name: err.name,
          message: err.message,
        });
      }
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  let content;

  if (error === "") {
    if (isLoading) {
      content = (
        <section>
          <div className={styles.loading}>Loading meals...</div>
        </section>
      );
    } else {
      content = (
        <ul>
          {meals.map((item) => (
            <MealItem mealItem={item} key={item.id} />
          ))}
        </ul>
      );
    }
  } else {
    content = (
      <section>
        <div className={styles.error}>Something went wrong</div>
      </section>
    );
  }

  return <Card className={styles.meals}>{content}</Card>;
};

export default AvailableMeals;
