import { Link } from "react-router-dom"
import RandomCocktail from "../RandomCocktail"
import StyledHeader from '../Header/StyledHeader'

const Header = ({user, setUser}) => {
    return (
        <StyledHeader>
            <h1>DRINKS.com</h1>
            <hr/>
            <nav>
                {user ?
                    <div className='loggedin'>
                        <h3>User: {user.username}</h3>
                        <button onClick={()=>setUser(null)}>Logout</button>
                        <Link style={{ padding: 5 }} to='/categories'><p>Categories</p></Link>
                        <Link style={{ padding: 5 }} to='/glasses'><p>Glasses</p></Link>
                        <Link style={{ padding: 5 }} to='/ingredients'><p>Ingredients</p></Link>
                        <Link style={{ padding: 5 }} to='/alcoholics'><p>Alcoholic/Non Alcoholic</p></Link>
                        <Link style={{ padding: 5 }} to='/random'><p>Random Drink</p></Link>
                        <Link style={{ padding: 5 }} to='/search'><p>Search Drink</p></Link>
                    </div>
                    :
                    <div className='loggedout'>
                        <Link style={{ padding: 5 }} to="/login"><p>Login</p></Link>
                        <Link style={{ padding: 5 }} to="/register"><p>Register</p></Link>
                    </div>

                }
            </nav>
            
        </StyledHeader>
    )
}

export default Header