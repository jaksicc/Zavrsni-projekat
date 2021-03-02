import { Link } from "react-router-dom"
import { getDrinkByName } from "../service"
import StyledGlass from "./Glasses/StyledGlass"

const DrinkByName = ({drinkbyname}) => {
    // console.log(drinkbyname)
    return (
        <>
        {drinkbyname.map(drink => <StyledGlass key={drink.strDrink}>
            <Link to={`/categories/item/${drink.idDrink}`} >
                    <p>{drink.strDrink}</p>
                    <img src={`${drink.strDrinkThumb}/preview`} />

                </Link>
        </StyledGlass>)}
        </>
    )
}

export default DrinkByName