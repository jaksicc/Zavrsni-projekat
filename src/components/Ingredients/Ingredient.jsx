import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { searchDrinksByIngredient } from "../../service"
import StyledGlass from "../Glasses/StyledGlass"

const Ingredient = () => {

    let { ingredient } = useParams()
    const [drinksbyingredient, setDrinksByIngredient] = useState([])

    useEffect(() => {
        searchDrinksByIngredient(ingredient).then(res => {
            setDrinksByIngredient(res.data.drinks)
        })
    }, [])
    return (
        <>
        {drinksbyingredient.map(drink => <StyledGlass key={drink.strDrink}>
            <Link to={`/categories/item/${drink.idDrink}`} >
            <p>{drink.strDrink}</p>
            <img src={`${drink.strDrinkThumb}/preview`} alt=""/>
        </Link>
        </StyledGlass>
        )}
        </>
    )
}

export default Ingredient