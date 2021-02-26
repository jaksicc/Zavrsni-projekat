import { Link } from "react-router-dom"
import styled from "styled-components"
import StyledCategories from "./StyledCategories"

const Categories = ({ categories }) => {
    // const StyledLink = styled.link`
    //     background-color: green
    // `


    return (
        <>
            {categories.map(category => <div key={category.strCategory}>

                <StyledCategories to={`/categories/${(category.strCategory).split('/').join('-')}`}>{category.strCategory}</StyledCategories>

            </div>)}
        </>
    )
}

export default Categories