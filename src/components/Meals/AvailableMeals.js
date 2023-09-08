import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const { error, isLoading, onFetch } = useFetch();

  useEffect(() => {
    const mealsDataHandler = (data) => {
      let mealItems = [];

      for (let key in data) {
        mealItems.push({ id: key, ...data[key] });
      }

      setMeals(mealItems);
    };

    onFetch(
      {
        url: 'meals',
      },
      mealsDataHandler
    );
  }, [onFetch]);

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
