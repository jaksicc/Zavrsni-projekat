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


////////////////////////////////////////////
export const getOrdinaryDrinks = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
}

export const getCocktails = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
}

export const getMilkFloatShake = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Milk_/_Float_/_Shake")
}

export const getCocoa = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocoa")
}

export const getShots = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shot")
}

export const getCofeeTea = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Coffee_/_Tea")
}

export const getHomemadeLiqueur = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Homemade_Liqueur")
}

export const getPunchPartyDrink = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Punch_/_Party_Drink")
}

export const getBeer = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer")
}

export const getSoftDrinks = () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Soft_Drink_/_Soda")
}


