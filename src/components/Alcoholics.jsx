import { Link } from "react-router-dom"

const Alcoholics = ({alcoholics}) => {
    return (
        <>
        {alcoholics.map(alcohol => <div key={alcohol.strAlcoholic}>
            <Link to={`/alcoholics/${alcohol.strAlcoholic}`}>{alcohol.strAlcoholic}</Link>
        </div>)}
        </>
    )
}

export default Alcoholics