import { useState } from "react"
import { getRandomCocktail } from "../service"

const RandomCocktail = () => {

    const [randomcocktail, setRandomCocktail] = useState([])

    return (
        <>
        <button onClick={()=>{
            getRandomCocktail().then(res => {
                setRandomCocktail(res.data.drinks)
            })
        }}>Random Cocktail</button>
        {randomcocktail.map(cocktail => <div key={cocktail.strDrink}>
            <p>Cocktail name: {cocktail.strDrink}</p>
            <img src={cocktail.strDrinkThumb} alt=""/>
            <p>Cocktail category: {cocktail.strCategory}</p>
            <p>Alcoholic/Non alcoholic: {cocktail.strAlcoholic}</p>
            <p>Glass: {cocktail.strGlass}</p>
            <p>Ingredient 1 : {cocktail.strIngredient1} | Measure 1 : {cocktail.strMeasure1}</p>
            <p>Ingredient 2 : {cocktail.strIngredient2} | Measure 2 : {cocktail.strMeasure2}</p>
            <p>Ingredient 3 : {cocktail.strIngredient3} | Measure 3 : {cocktail.strMeasure3}</p>
            <p>Instructions (EN) : {cocktail.strInstructions}</p>
        </div>)}
        </>
    )
}

export default RandomCocktail