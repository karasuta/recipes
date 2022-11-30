function MyRecipesComponent({label,image,calories,ingredients}){
    return(<div>
        
            <div className="container">
            <h2>{label}</h2>
            </div>

            <div className="container">
            <img src={image} alt='recipe_img'/>
            </div>

            <ul className="list">
                {ingredients.map((ingredient,index)=>(
                    <li key={index}><img src="https://img.icons8.com/external-filled-outline-perfect-kalash/512/external-Tick-basic-filled-outline-perfect-kalash.png" className="icons" alt="tick"/>{ingredient}</li>
                ))}
            </ul>

            <div className="container">
            <p className="par">{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}
export default MyRecipesComponent;