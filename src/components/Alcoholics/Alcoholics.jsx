import { Link, Redirect } from "react-router-dom"
import StyledAlcoholics from "./StyledAlcoholics"

const Alcoholics = ({ alcoholics, user }) => {
    return user? (
        <>
            {alcoholics.map(alcohol => <StyledAlcoholics key={alcohol.strAlcoholic}>
                <Link to={`/alcoholics/${alcohol.strAlcoholic}`}><p>{alcohol.strAlcoholic}</p></Link>
            </StyledAlcoholics>)}
        </>
    )
    :
    <Redirect to="/login"></Redirect>
}

export default Alcoholics