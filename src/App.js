import { useEffect, useState } from "react"
import Cocktails from "./components/Cocktails"
import OrdinaryDrinks from "./components/OrdinaryDrinks"
import Select from "./components/Select"
import Shots from "./components/Shots"
import { getAllCategories, getAllGlasses, getAllIngredients, getBeer, getByAlcohol, getHomemadeLiqueur, getMilkFloatShake, getOrdinaryDrinks, getSoftDrinks } from "./service"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Categories from "./components/Categories"
import Category from "./components/Category"
import Glasses from "./components/Glasses"
import Glass from "./components/Glass"
import Ingredients from "./components/Ingredients"
import Ingredient from "./components/Ingredient"
import Alcoholics from "./components/Alcoholics"
import Alcoholic from "./components/Alcoholic"
import CocktailInfo from "./components/CocktailInfo"
import RandomCocktail from "./components/RandomCocktail"
import IngredientInfo from "./components/IngredientInfo"



const App = () => {

  // useEffect(() => {
  //   getMilkFloatShake().then(res => console.log(res.data))
  // }, [])

  // useEffect(() => {
  //   getOrdinaryDrinks().then(res => console.log(res.data))
  // }, [])

  // useEffect(() => {
  //   getHomemadeLiqueur().then(res => console.log(res.data))
  // }, [])

  // useEffect(() => {
  //   getBeer().then(res => console.log(res.data))
  // }, [])

  // useEffect(() => {
  //   getSoftDrinks().then(res => console.log(res.data))
  // }, [])

  const [categories, setCategories] = useState([])
  const [glasses, setGlasses] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [alcoholics, setAlcoholics] = useState([])

  useEffect(() => {
    getAllCategories().then(res => {
      setCategories(res.data.drinks)
    })
  }, [])

  useEffect(() => {
    getAllGlasses().then(res => {
      setGlasses(res.data.drinks)
    })
  }, [])

  useEffect(() => {
    getAllIngredients().then(res => {
      setIngredients(res.data.drinks)
    })
  }, [])

  useEffect(() => {
    getByAlcohol().then(res => {
      setAlcoholics(res.data.drinks)
    })
  }, [])



  return (
    <>
      <Router>
        <nav>
          <Link style={{ padding: 5 }} to='/categories'>Categories</Link>
          <Link style={{ padding: 5 }} to='/glasses'>Glasses</Link>
          <Link style={{ padding: 5 }} to='/ingredients'>Ingredients</Link>
          <Link style={{ padding: 5 }} to='/alcoholics'>Alcoholic/Non Alcoholic</Link>
          {/* <Link to='/cocktails'>Cocktails</Link>
          <Link to='/ordinarydrinks'>Ordinary Drinks</Link>
          <Link to='/shots'>Shots</Link> */}
        </nav>
        <RandomCocktail />
        <hr />

        <Switch>


          <Route path='/categories/:category/:id'>
            <CocktailInfo />
          </Route>

          <Route path='/categories/:category'>
            <Category categories={categories} />
          </Route>

          <Route path='/categories'>
            <Categories categories={categories} />
          </Route>

          <Route path='/glasses/:glass'>
            <Glass />
          </Route>

          <Route path='/glasses'>
            <Glasses glasses={glasses} />
          </Route>

          <Route path='/ingredients/info/:name'>
            <IngredientInfo />
          </Route>

          <Route path='/ingredients/:ingredient'>
            <Ingredient />
          </Route>

          <Route path='/ingredients'>
            <Ingredients ingredients={ingredients} />
          </Route>

          <Route path='/alcoholics/:alcoholic'>
            <Alcoholic />
          </Route>

          <Route path='/alcoholics'>
            <Alcoholics alcoholics={alcoholics} />
          </Route>

          {/* <Route path='/cocktails'>
            <Cocktails />
          </Route>

          <Route path='/ordinarydrinks'>
            <OrdinaryDrinks />
          </Route>

          <Route path='/shots'>
            <Shots />
          </Route> */}

        </Switch>

      </Router>
    </>
  )
}

export default App
