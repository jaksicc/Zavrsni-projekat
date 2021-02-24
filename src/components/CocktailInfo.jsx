import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCocktailById } from "../service"

const CocktailInfo = () => {

    let { id } = useParams()
    const [cocktaildetails, setCocktailDetails] = useState([])

    useEffect(() => {
        getCocktailById(id).then(res => {
            setCocktailDetails(res.data.drinks)
        })
    }, [])
    console.log(cocktaildetails)
    return (
        <>
        {cocktaildetails.map(drink => <div key={drink.strDrink}>
            <p>Cocktail name: {drink.strDrink}</p>
            <img src={drink.strDrinkThumb} alt=""/>
            <p>Alcoholic/Non alcoholic: {drink.strAlcoholic}</p>
            <p>Cocktail category: {drink.strCategory}</p>
            <p>Glass: {drink.strGlass}</p>
            <p>Ingredient 1 : {drink.strIngredient1} | Measure 1 : {drink.strMeasure1}</p>
            <p>Ingredient 2 : {drink.strIngredient2} | Measure 1 : {drink.strMeasure2}</p>
            <p>Ingredient 3 : {drink.strIngredient3} | Measure 1 : {drink.strMeasure3}</p>
            <p>Instructions(EN): {drink.strInstructions}</p>
            <p>Instructions(ES): {drink.strInstructionsES}</p>
            <p>Instructions(DE): {drink.strInstructionsDE}</p>
            <p>Instructions(FR): {drink.strInstructionsFR}</p>
            <p>Instructions(IT): {drink.strInstructionsIT}</p>



        </div>)}

        </>
    )
}

export default CocktailInfo