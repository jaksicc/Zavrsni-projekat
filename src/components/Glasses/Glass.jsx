import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { filterByGlass } from "../../service"
import StyledGlass from "./StyledGlass"

const Glass = () => {

    let { glass } = useParams()
    const [drinksbyglass, setDrinksByGlass] = useState([])

    useEffect(() => {
        filterByGlass(glass).then(res => {
            setDrinksByGlass(res.data.drinks)
            console.log(res.data.drinks)
        })
    }, [])

    return (
        <>
            {drinksbyglass.map(drink => <StyledGlass key={drink.strDrink}>

                <Link to={`/categories/item/${drink.idDrink}`} >
                    <p>{drink.strDrink}</p>
                    <img src={`${drink.strDrinkThumb}/preview`} alt="" />

                </Link>
            </StyledGlass>
            )}
        </>
    )
}

export default Glass