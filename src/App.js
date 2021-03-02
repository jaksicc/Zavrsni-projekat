import { useEffect, useState } from "react"
import { getAllCategories, getAllGlasses, getAllIngredients, getByAlcohol } from "./service"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Categories from "./components/Categories/Categories"
import Category from "./components/Categories/Category"
import Glasses from "./components/Glasses/Glasses"
import Glass from "./components/Glasses/Glass"
import Ingredients from "./components/Ingredients/Ingredients"
import Ingredient from "./components/Ingredients/Ingredient"
import CocktailInfo from "./components/CocktailInfo/CocktailInfo"
import RandomCocktail from "./components/RandomCocktail"
import IngredientInfo from "./components/IngredientInfo"
import Login from "./components/LoginRegister/Login"
import Register from "./components/LoginRegister/Register"
import '../src/main.css'
import Header from "./components/Header/Header"
import Alcoholic from "./components/Alcoholics/Alcoholic"
import Alcoholics from "./components/Alcoholics/Alcoholics"
import SearchDrink from "./components/SearchDrink"




const App = () => {

  const [user, setUser] = useState(null)
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
      <Router basename={'/'}>
        <Header user={user} setUser={setUser} />

        <hr />

        <Switch>

          <Route path='/search'>
            <SearchDrink user={user} />
          </Route>

          <Route path='/random'>
            <RandomCocktail />
          </Route>

          <Route path="/login">
            <Login setUser={setUser} />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path='/categories/item/:id'>
            <CocktailInfo />
          </Route>

          <Route path='/categories/:category'>
            <Category categories={categories} />
          </Route>

          <Route path='/categories'>
            <Categories categories={categories} user={user} />
          </Route>

          <Route path='/glasses/:glass'>
            <Glass />
          </Route>

          <Route path='/glasses'>
            <Glasses glasses={glasses} user={user} />
          </Route>

          <Route path='/ingredients/info/:name'>
            <IngredientInfo />
          </Route>

          <Route path='/ingredients/:ingredient'>
            <Ingredient />
          </Route>

          <Route path='/ingredients'>
            <Ingredients ingredients={ingredients} user={user} />
          </Route>

          <Route path='/alcoholics/:alcoholic'>
            <Alcoholic />
          </Route>

          <Route path='/alcoholics'>
            <Alcoholics alcoholics={alcoholics} user={user} />
          </Route>

          <Route path='/random'>
            <RandomCocktail />
          </Route>


        </Switch>

      </Router>
    </>
  )
}

export default App
