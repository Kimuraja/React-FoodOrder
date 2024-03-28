import { currencyFormatter } from '../util/formatting'
import Button from './UI/Button'

export default function MealItem({ meals }) {
  return (
    <li key={meals.id} className='meal-item' >
      <img src={meals.image} alt={meals.name}/>
      <div>
        <h3>{meals.name}</h3>
        <p className='meal-item-price'>{currencyFormatter.format(meals.price)}</p>
        <p className='meal-item-description'>{meals.description}</p>
      </div>
      <p className='meal-item-actions'>
        <Button>Add to Cart</Button>
      </p>
    </li>
  )
}
