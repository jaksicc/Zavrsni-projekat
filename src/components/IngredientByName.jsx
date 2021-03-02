import StyledCoctailInfo from "./CocktailInfo/StyledCocktailInfo"

const IngredientByName = ({ingredientbyname, ingredientimg}) => {
    return (
        <>
         {ingredientbyname.map(ingredient => <StyledCoctailInfo key={ingredient.strIngredient}>
                <p>{ingredient.strIngredient}</p>
                <img src={ingredientimg} alt=""/>
                <p>{ingredient.strDescription}</p>
            </StyledCoctailInfo>)}
        </>
    )
}

export default IngredientByName