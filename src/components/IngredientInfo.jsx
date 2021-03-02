import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getIngredientImg, getIngredientInfo } from "../service"
import StyledCoctailInfo from "./CocktailInfo/StyledCocktailInfo"


const IngredientInfo = () => {

    let { name } = useParams()
    const [ingredientinfo, setIngredientInfo] = useState([])
    const [ingredientimg, setIngredientImg] = useState()
    console.log(name)

    useEffect(() => {
        getIngredientInfo(name).then(res => {
            setIngredientInfo(res.data.ingredients)
        })
    }, [])

    useEffect(() => {
        getIngredientImg(name).then(res => {
            setIngredientImg(res.config.url)
        })
    }, [])
    console.log(ingredientimg)

    return (
        <>
            {ingredientinfo.map(info => <StyledCoctailInfo key={info.strIngredient}>
                <p>{info.strIngredient}</p>
                <img src={ingredientimg} alt=""/>
                <p>{info.strDescription}</p>
            </StyledCoctailInfo>)}
        </>
    )
}

export default IngredientInfo