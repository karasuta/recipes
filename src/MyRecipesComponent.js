function MyRecipesComponent({label,image,calories,ingredients,cuisineType,mealType,protein,carbs,fat}){
    return(<div>
        
            <div className="container">
                <h2>{label}</h2>
            </div>
            
            <ul className="container">
            {cuisineType.map((ctype,index)=>(
                <li className="type" key={index}><span>Cuizine type: </span>{ctype}</li>
            ))}
            </ul>
            <ul className="container">
            {mealType.map((mtype,index)=>(
                <li className="type" key={index}><span>Meal type: </span>{mtype}</li>
            ))}
            </ul>
            <div className="container">
            <img className="pict" src={image} alt='recipe_img'/>
            </div>

            <ul className="list">
                {ingredients.map((ingredient,index)=>(
                    <li className="ingredient" key={index}><img src="https://img.icons8.com/external-filled-outline-perfect-kalash/512/external-Tick-basic-filled-outline-perfect-kalash.png" className="icons" alt="tick"/>{ingredient}></li>
                ))}
            </ul>

            <div className="container">
            <p className="par">{calories.toFixed()} kcal: protein - {protein.toFixed()}g/fat - {fat.toFixed()}g/carbs - {carbs.toFixed()}g</p>

            </div>
        </div>
    )
}
export default MyRecipesComponent;