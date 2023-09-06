import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useCallback, useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMealsData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://react-http-f4305-default-rtdb.firebaseio.com/meals.json'
    );

    const data = await response.json();

    let mealItems = [];

    for (let key in data) {
      mealItems.push({ id: key, ...data[key] });
    }

    setMeals(mealItems);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMealsData();
  }, [getMealsData]);

  let mealsList = (
    <ul>
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </ul>
  );
  if (isLoading) {
    mealsList = <p className={classes.isLoading}>로딩중 입니다.</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
