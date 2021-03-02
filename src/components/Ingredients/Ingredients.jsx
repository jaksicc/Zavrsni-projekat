import { Link, Redirect } from "react-router-dom"
import StyledIngredients from './StyledIngredients'

const Ingredients = ({ingredients, user}) => {
    return user? (
        <>
        {ingredients.map(ingredient => <StyledIngredients key={ingredient.strIngredient1}>
            <Link to={`/ingredients/${ingredient.strIngredient1}`}><p>{ingredient.strIngredient1}</p></Link>
            <Link to={`/ingredients/info/${ingredient.strIngredient1}`}><p>Ingredient info</p></Link>
        </StyledIngredients>)}
        </>
    )
    :
    <Redirect to="/login"></Redirect>
}

export default Ingredients