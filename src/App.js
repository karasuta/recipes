import { useEffect, useState} from 'react';
import video from './food.mp4';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const My_id = "855e73f2";
  const My_key = "f7d820559d3236c55d35b5fcc2f19cb0";
  const [mySearch, setMySearch]=useState("");
  const [myRecipes, setMyRecipes]=useState([]);
  const[wordSubmitted,setWordSubmitted]=useState('avocado');
  useEffect(()=>{
    async function getRecipe(){
    const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${My_id}&app_key=${My_key}`);
    const data = await responce.json();
    setMyRecipes(data.hits)
    }
    getRecipe();
  },[wordSubmitted])

  const myRecipeSearch=(e)=>{
    setMySearch(e.target.value)
  }
  const finalSearch=(e)=>{
    e.preventDefault();
    setWordSubmitted(mySearch)
  }
  return(
    <div className='App'>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch} className="container_search">
          <input className='search' placeholder='Search' onChange={myRecipeSearch} value={mySearch}>
          </input>
          <button>
          <img src="https://img.icons8.com/fluency/48/00000/fry.png" className='icons' alt='search'/>
        </button>
        </form>
      </div>
      <div>
      {myRecipes.map((element,index)=>(
        <MyRecipesComponent label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories} 
        ingredients={element.recipe.ingredientLines}
        cuisineType={element.recipe.cuisineType}
        mealType={element.recipe.mealType}
        fat={element.recipe.totalNutrients.FAT.quantity}
        protein={element.recipe.totalNutrients.PROCNT.quantity}
        carbs={element.recipe.totalNutrients.CHOCDF.quantity}
        key={index}/>
      ))}
      </div>
    </div>
  )
}

export default App;
