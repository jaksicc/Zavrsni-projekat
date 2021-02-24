import { Link } from "react-router-dom"

const Ingredients = ({ingredients}) => {
    return (
        <>
        {ingredients.map(ingredient => <div key={ingredient.strIngredient1}>
            <Link to={`/ingredients/${ingredient.strIngredient1}`}>{ingredient.strIngredient1}</Link> ---
            <Link to={`/ingredients/info/${ingredient.strIngredient1}`}>Ingredient info</Link>
        </div>)}
        </>
    )
}

export default Ingredients