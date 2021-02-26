import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { searchDrinksByIngredient } from "../service"

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
        {drinksbyingredient.map(drink => <Link to={`/categories/item/${drink.idDrink}`} key={drink.strDrink}>
            <p>{drink.strDrink}</p>
            <img src={`${drink.strDrinkThumb}/preview`} alt=""/>
        </Link>)}
        </>
    )
}

export default Ingredient