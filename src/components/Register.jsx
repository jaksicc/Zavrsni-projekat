import { useState } from "react"
import { useHistory } from "react-router-dom"
import { getUsers, postUser } from "../service"

const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const isValid = (username, email, password) => {
        if (username.length > 4 && email.includes('@') && email.includes('.') && password.length > 4)
            return true
    }

    let history = useHistory()

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                getUsers().then(res => {

                    console.log(username, email, password)
                    let userExists = res.data.find(el => el.username === username || el.email === email)
                    console.log(userExists)
                    if (userExists) {
                        window.alert('Username or email allready taken')
                    }
                    else if (isValid(username, email, password)) {
                        postUser(username, email, password)
                        setUsername('')
                        setEmail('')
                        setPassword('')
                        window.alert('Successfully registered')
                        history.push('/categories')
                    }
                    else {
                        window.alert('Username, email or password are not valid')
                    }
                })
            }}>
                <h3>Register</h3>
                <div>
                    <label htmlFor="username">Username</label>
                    <input value={username} type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input value={email} type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input value={password} type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" />
            </form>
        </>
    )
}

export default Register