import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { filterByAlcoholic } from "../service"

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
        {drinksbyalcoholic.map(drink => <div key={drink.strDrink}>
            <p>{drink.strDrink}</p>
            <img src={drink.strDrinkThumb} alt=""/>
        </div>)}
        </>
    )
}

export default Alcoholic