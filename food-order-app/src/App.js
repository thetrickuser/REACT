import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default App;
