import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCategory } from "../../service"
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
            {cat.map(cat => <StyledCategory>
            <Link to={`/categories/item/${cat.idDrink}`} key={cat.strDrink}>
                <p>{cat.strDrink}</p>
                <img src={`${cat.strDrinkThumb}/preview`} />
            </Link>
            </StyledCategory>)}
        </>
    )
}

export default Category