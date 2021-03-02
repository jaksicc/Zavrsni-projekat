import { Link, Redirect } from "react-router-dom"
import StyledGlasses from "./StyledGlasses"

const Glasses = ({ glasses, user }) => {
    return user? (
        <>
            {glasses.map(glass => <StyledGlasses key={glass.strGlass}>
                <Link to={`/glasses/${glass.strGlass}`}><p>{glass.strGlass}</p></Link>
            </StyledGlasses>)}

        </>
    )
    :
    <Redirect to="/login"></Redirect>
}

export default Glasses