import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { filterByGlass } from "../service"

const Glass = () => {

    let {glass} = useParams()
    const [drinksbyglass, setDrinksByGlass] = useState([])

    useEffect(() => {
        filterByGlass(glass).then(res => {
            setDrinksByGlass(res.data.drinks)
            console.log(res.data.drinks)
        })
    },[])

    return (
        <>
        {drinksbyglass.map(drink =><Link to={`/categories/item/${drink.idDrink}`} key={drink.strDrink}>
            <p>{drink.strDrink}</p>
            <img src={`${drink.strDrinkThumb}/preview`} alt=""/>

        </Link>)}
        </>
    )
}

export default Glass