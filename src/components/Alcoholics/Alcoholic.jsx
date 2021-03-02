import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { filterByAlcoholic } from "../../service"
import StyledGlass from "../Glasses/StyledGlass"


const Alcoholic = () => {

    let { alcoholic } = useParams()
    const [drinksbyalcoholic, setDrinksByAlcoholic] = useState([])

    useEffect(() => {
        filterByAlcoholic(alcoholic).then(res => {
            setDrinksByAlcoholic(res.data.drinks)
        })
    }, [])

    return (
        <>
        {drinksbyalcoholic.map(drink => <StyledGlass key={drink.strDrink}>
            <Link to={`/categories/item/${drink.idDrink}`} >
            <p>{drink.strDrink}</p>
            <img src={`${drink.strDrinkThumb}/preview`} />
        </Link>
        </StyledGlass>
        )}
        </>
    )
}

export default Alcoholic