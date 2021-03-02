import { useState } from "react"
import { useHistory } from "react-router-dom"
import { getUsers } from "../../service"
import StyledLogin from "./StyledLogin"

const Login = ({ setUser }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()


    return (
        <StyledLogin>
        <form onSubmit={(e) => {
            e.preventDefault()
            getUsers().then(res => {
                let user = res.data.find(el => el.username === username && el.password === password)
                if (user) {
                    setUser(user)
                    history.push('/')
                }
                else {
                    window.alert('Niste registrovani')
                }
            })
        }}>
            <h3>Login</h3>
            <div className='logreg'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='logreg'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" />

        </form>
        </StyledLogin>
    )
}

export default Login