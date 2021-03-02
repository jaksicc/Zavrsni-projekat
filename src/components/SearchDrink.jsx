import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { getDrinkByName, getDrinksByFirstLetter, getIngredientImg, getIngredientInfo } from "../service"
import DrinkByName from "./DrinkByName"
import DrinksByLetter from "./DrinksByLetter"
import IngredientByName from "./IngredientByName"
import Ingredient from "./Ingredients/Ingredient"

const SearchDrink = ({user}) => {

    const [drinkname, setDrinkName] = useState('')
    const [drinkbyname, setDrinkByName] = useState([])

    const [ingredientname, setIngredientName] = useState('')
    const [ingredientbyname, setIngredientByName] = useState([])

    const [ingredientimg, setIngredientImg] = useState()

    const [letter, setLetter] = useState('')
    const [drinksbyletter, setDrinksByLetter] = useState([])

    return user?(
        <>
            <div>
                <label htmlFor="">Enter name</label>
                <input type="text" onChange={(e) => setDrinkName(e.target.value)} />
                <button onClick={() => {
                    getDrinkByName(drinkname).then(res => {
                        setDrinkByName(res.data.drinks)
                       

                        setIngredientByName([])
                    })
                }}>Search</button>
            </div>
            <div>
                <label htmlFor="">Enter ingredient</label>
                <input type="text" onChange={(e) => setIngredientName(e.target.value)} />
                <button onClick={() => {
                    getIngredientInfo(ingredientname).then(res => {
                        setIngredientByName(res.data.ingredients)
                        

                        getIngredientImg(ingredientname).then(res => {
                            setIngredientImg(res.config.url)
                        })

                        setDrinkByName([])
                    })
                }}>Search</button>
            </div>
            <div>
                <label htmlFor="">Search drinks by first letter</label>
                <input  maxLength={1} type="text" onChange={(e) => setLetter(e.target.value)} />
                <button onClick={() => {
                    getDrinksByFirstLetter(letter).then(res => {
                        setDrinksByLetter(res.data.drinks)
                        

                        setDrinkByName([])
                        setIngredientByName([])
                    })
                }}>Search</button>
            </div>
            <DrinkByName drinkbyname={drinkbyname} />
            <IngredientByName ingredientbyname={ingredientbyname} ingredientimg={ingredientimg} />
            <DrinksByLetter drinksbyletter={drinksbyletter}/>
        </>
    )
    :
    <Redirect to="/login"></Redirect>
}

export default SearchDrink