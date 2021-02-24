import { Link } from "react-router-dom"

const Glasses = ({ glasses }) => {
    return (
        <>
            {glasses.map(glass => <div key={glass.strGlass}>
                <Link to={`/glasses/${glass.strGlass}`}>{glass.strGlass}</Link>
            </div>)}

        </>
    )
}

export default Glasses