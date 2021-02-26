import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCocktailById } from "../../service"
import StyledCoctailInfo from "./StyledCocktailInfo"

const CocktailInfo = () => {

    let { id } = useParams()
    const [cocktaildetails, setCocktailDetails] = useState([])
    console.log(id)
    useEffect(() => {
        getCocktailById(id).then(res => {
            setCocktailDetails(res.data.drinks)
        })
    }, [])
    // console.log(cocktaildetails)
    return (
        <>
            {cocktaildetails.map(drink => <StyledCoctailInfo key={drink.strDrink}>
                <p>Cocktail name: {drink.strDrink}</p>
                <img src={drink.strDrinkThumb}  />
                <p>Alcoholic/Non alcoholic: {drink.strAlcoholic}</p>
                <p>Cocktail category: {drink.strCategory}</p>
                <p>Glass: {drink.strGlass}</p>
                <p>Ingredient 1 : {drink.strIngredient1} | Measure 1 : {drink.strMeasure1}</p>
                <p>Ingredient 2 : {drink.strIngredient2} | Measure 2 : {drink.strMeasure2}</p>
                <p>Ingredient 3 : {drink.strIngredient3} | Measure 3 : {drink.strMeasure3}</p>

                {drink.strInstructions ?<p>Instructions(EN): {drink.strInstructions}</p>:null}

                {drink.strInstructionsDE ?<p>Instructions(DE): {drink.strInstructionsDE}</p>:null}
                
                {drink.strInstructionsFR ?<p>Instructions(FR): {drink.strInstructionsFR}</p>:null}

                {drink.strInstructionsES ?<p>Instructions(ES): {drink.strInstructionsES}</p>:null}

                {drink.strInstructionsIT ?<p>Instructions(IT): {drink.strInstructionsIT}</p>:null}



            </StyledCoctailInfo>)}

        </>
    )
}

export default CocktailInfo