import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useCallback, useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const getMealsData = useCallback(async () => {
    const response = await fetch(
      'https://react-http-f4305-default-rtdb.firebaseio.com/meals.json'
    );

    const data = await response.json();

    let mealItems = [];

    for (let key in data) {
      mealItems.push({ id: key, ...data[key] });
    }

    setMeals(mealItems);
  });

  useEffect(() => {
    getMealsData();
  }, [getMealsData]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
