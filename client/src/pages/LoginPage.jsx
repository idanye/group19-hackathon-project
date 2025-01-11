import { useState } from "react";
import "../style/App.css"

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <div className="page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Log in</h1>

                <label>Email:</label>
                <input
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                />

                <label>Password:</label>
                <input
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                />

                <button>Log in</button>
            </form>
        </div>
    )
}

export default LoginPage