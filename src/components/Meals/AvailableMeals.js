import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chiken biryani',
      description: 'Finest chiken and veggies',
      price: 69.99,
    },
    {
      id: 'm2',
      name: 'Pizza',
      description: 'A Indian specialty!',
      price: 49.50,
    },
    {
      id: 'm3',
      name: ' Burger',
      description: 'Indian, raw, meaty',
      price: 12.79,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  
  const mealsList=DUMMY_MEALS.map((meal)=>
   <MealItem  
   key={meal.id} 
   id={meal.id}
   name={meal.name}
   description={meal.description}
   price={meal.price} />);
  const AvailableMeals=()=>{

    return <section className={classes.meals}>
     <Card>
        <ul>{mealsList}</ul>
     </Card>
   </section>
  };

  export default AvailableMeals