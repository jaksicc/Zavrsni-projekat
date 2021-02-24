import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCategory } from "../service"

const Category = () => {

    let {category} = useParams()
    const [cat, setCat] = useState([])

    useEffect(()=>{
        getCategory(category).then(res =>{
            setCat(res.data.drinks)
            console.log(res.data.drinks)
        })
        
    },[])

    console.log(category)

    return (
        <>
       {cat.map(cat => <Link to={`/categories/${category}/${cat.idDrink}`} key={cat.strDrink}>
           <p>{cat.strDrink}</p>
           <img src={`${cat.strDrinkThumb}/preview`} alt=""/>
       </Link>)}
        </>
    )
}

export default Category