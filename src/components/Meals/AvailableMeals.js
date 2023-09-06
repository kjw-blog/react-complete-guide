import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useCallback, useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getMealsData = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://react-http-f4305-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('오류 발생');
      }

      const data = await response.json();

      let mealItems = [];

      for (let key in data) {
        mealItems.push({ id: key, ...data[key] });
      }

      setMeals(mealItems);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMealsData();
  }, [getMealsData]);

  let mealsList = <p className={classes['text-center']}>데이터가 없습니다.</p>;

  if (isLoading) {
    mealsList = <p className={classes['text-center']}>로딩중 입니다.</p>;
  }

  if (error) {
    mealsList = <p className={classes['text-center']}>{error}</p>;
  }

  if (meals.length > 0) {
    mealsList = (
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
  }

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
