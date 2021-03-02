import axios from 'axios'


//https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list        LISTA SVIH KATEGORIJA PICA

export const getAllCategories = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
}


export const getCategory = (category) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
}


// https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list          LISTA SVIH CASA

export const getAllGlasses = () => {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
}

export const filterByGlass = (glass) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`)
}


// https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list          LISTA SVIH SASTOJAKA

export const getAllIngredients = () => {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
}

export const searchDrinksByIngredient = (ingredient) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
}


// https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list LISTA ALKOHOLNIH I NEALKOHOLINH PICA

export const getByAlcohol = () => {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
}

export const filterByAlcoholic = (alcoholic) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholic}`)
}

// dohvatanje detaljnih informacija o koktelu
export const getCocktailById = (id) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
}


// RANDOM COCKTAIL INFO

export const getRandomCocktail = () => {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
}

// SEARCH INGREDIENT BY NAME

export const getIngredientInfo = (ingredient) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`)
}

export const getIngredientImg = (ingredient) => {
    return axios.get(`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`)
}

// Drink by name/first letter

export const getDrinkByName = (name) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
}

export const getDrinksByFirstLetter = (letter) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
}




// LOGIN I REGISTER

export const getUsers = () => {
    return axios.get('https://my-json-server.typicode.com/jaksicc/zavrsni-users-api-server/users')
}

export const postUser = (username, email, password) => {
    return axios.post('http://localhost:3005/users', {username, email, password})
}
////////////////////////////////////////////



