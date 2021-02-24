import { Link } from "react-router-dom"

const Categories = ({ categories }) => {

    
    return (
        <>
            {categories.map(category => <div key={category.strCategory}>
                <Link to={`/categories/${category.strCategory}`}>{category.strCategory}{console.log(category.strCategory)}</Link>
            </div>)}
        </>
    )
}

export default Categories