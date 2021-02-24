import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getIngredientImg, getIngredientInfo } from "../service"
import Ingredient from "./Ingredient"

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
            {ingredientinfo.map(info => <div key={info.strIngredient}>
                <p>{info.strIngredient}</p>
                <img src={ingredientimg} alt=""/>
                <p>{info.strDescription}</p>
            </div>)}
        </>
    )
}

export default IngredientInfo