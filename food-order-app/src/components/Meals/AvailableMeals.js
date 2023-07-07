import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    title: "Egg Roll",
    desc: "Delicious veggies and egg wrapped in tortilla",
    price: "35",
  },
  {
    id: "m2",
    title: "Chicken Chowmin",
    desc: "Noodles with gravy and chicken breast cubes",
    price: "100",
  },
  {
    id: "m3",
    title: "Paneer Paratha",
    desc: "Mouth watering parathas stuffed with paneer",
    price: "45",
  },
  {
    id: "m4",
    title: "Chicken Boneless",
    desc: "Chicken without bones and stuffed with masala",
    price: "180",
  },
];

const AvailableMeals = () => {
  return (
    <Card className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((item) => (
          <MealItem mealItem={item} />
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
