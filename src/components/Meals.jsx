import { useEffect, useState } from 'react'
import MealItem from './MealItem';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(()=> {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals')
  
      if (!response.ok) {
        console.log('Error, loading db failed')
      }
  
      const meals = await response.json();
      setLoadedMeals(meals)
    }

    fetchMeals()
  }, []);

  return (
    <ul id='meals'>
      {loadedMeals.map((meals) => (
        <MealItem key={meals.id} meals={meals}/>
      ))}
    </ul>
  )
}
