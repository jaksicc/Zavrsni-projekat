import { Link } from "react-router-dom"
import StyledGlass from "./Glasses/StyledGlass"

const DrinksByLetter = ({ drinksbyletter }) => {
    return (
        <>
            {drinksbyletter.map(drink => <StyledGlass key={drink.strDrink}>

                <Link to={`/categories/item/${drink.idDrink}`} >
                    <p>{drink.strDrink}</p>
                    <img src={`${drink.strDrinkThumb}/preview`} alt="" />

                </Link>
            </StyledGlass>
            )}
        </>
    )
}

export default DrinksByLetter