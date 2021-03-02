import { Link, Redirect } from "react-router-dom"
import styled from "styled-components"
import StyledCategories from "./StyledCategories"

const Categories = ({ categories, user }) => {

    return user? (
        <>
            {categories.map(category => <StyledCategories key={category.strCategory}>

                <Link to={`/categories/${(category.strCategory).split('/').join('-')}`}><p>{category.strCategory}</p></Link>

            </StyledCategories>)}
        </>
    )
    :
    (

        <Redirect to='/login'></Redirect>
    )
}

export default Categories