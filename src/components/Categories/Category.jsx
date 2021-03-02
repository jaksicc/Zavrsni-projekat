import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCategory } from "../../service"
import StyledGlass from "../Glasses/StyledGlass"
import StyledCategory from "./StyledCategory"

const Category = () => {

    let { category } = useParams()
    const [cat, setCat] = useState([])
    let newCategory = category.split('-').join('/')
    console.log(category)
    console.log(newCategory)

    useEffect(() => {
        getCategory(newCategory).then(res => {
            setCat(res.data.drinks)

        })

    }, [])



    return (
        <>
            {cat.map(cat => <StyledGlass key={cat.strDrink}>
            <Link to={`/categories/item/${cat.idDrink}`} >
                <p>{cat.strDrink}</p>
                <img src={`${cat.strDrinkThumb}/preview`} />
            </Link>
            {/* <div className='ime'>
            <p>{cat.strDrink}</p>
            </div> */}
            </StyledGlass>)}
        </>
    )
}

export default Category