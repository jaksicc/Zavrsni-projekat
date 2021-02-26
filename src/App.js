import { useEffect, useState } from "react"
import { getAllCategories, getAllGlasses, getAllIngredients, getByAlcohol } from "./service"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Categories from "./components/Categories/Categories"
import Category from "./components/Categories/Category"
import Glasses from "./components/Glasses"
import Glass from "./components/Glass"
import Ingredients from "./components/Ingredients"
import Ingredient from "./components/Ingredient"
import Alcoholics from "./components/Alcoholics"
import Alcoholic from "./components/Alcoholic"
import CocktailInfo from "./components/CocktailInfo/CocktailInfo"
import RandomCocktail from "./components/RandomCocktail"
import IngredientInfo from "./components/IngredientInfo"
import Login from "./components/Login"
import Register from "./components/Register"
import StyledCategories from "./components/Categories/StyledCategories"



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
      <Router>
        <nav>
          {user ?
            <>
              <p>User: {user.username}</p>
              <Link style={{ padding: 5 }} to='/categories'>Categories</Link>
              <Link style={{ padding: 5 }} to='/glasses'>Glasses</Link>
              <Link style={{ padding: 5 }} to='/ingredients'>Ingredients</Link>
              <Link style={{ padding: 5 }} to='/alcoholics'>Alcoholic/Non Alcoholic</Link>
              <RandomCocktail />
            </>
            :
            <>
              <Link style={{ padding: 5 }} to="/login">Login</Link>
              <Link style={{ padding: 5 }} to="/register">Register</Link>
            </>

          }
        </nav>

        <hr />

        <Switch>

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
            <Categories categories={categories} user={user}/>
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


        </Switch>

      </Router>
    </>
  )
}

export default App
