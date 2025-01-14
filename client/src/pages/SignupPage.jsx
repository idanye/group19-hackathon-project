import { useState } from "react";
import { useSignup } from "../hooks/useSignup.jsx";

const SignupPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [userType, setUserType] = useState('regular')

    // expert additional information
    const [expertID, setExpertID] = useState('')
    const [expertField, setExpertField] = useState('')

    const { signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            userType,
            ...(userType === 'expert' ? { expertName: name } : { name }),
            email,
            password,
            ...(userType === 'expert' && { expertID }),
            ...(userType === 'expert' && { expertField })
        };

        console.log(user)
        await signup(user)
    }

    return (
        <div className="page">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Sign up</h1>

                <label>Name:</label>
                <input
                    type="name"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    value={name}
                />

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

                <label>User Type:</label>
                <fieldset>
                    <label>
                        <input
                            type="radio"
                            value="regular"
                            checked={userType === 'regular'}
                            onChange={(e) => setUserType(e.target.value)}
                        />
                        Regular User
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="expert"
                            checked={userType === 'expert'}
                            onChange={(e) => setUserType(e.target.value)}
                        />
                        Expert
                    </label>
                </fieldset>

                {userType === 'expert' && (
                    <>
                        <label>Expert ID:</label>
                        <input
                            type="text"
                            onChange={(e) => setExpertID(e.target.value)}
                            value={expertID}
                            placeholder="Enter your Expert ID"
                        />
                        <label>Expert Field:</label>
                        <select
                            id="expert-field"
                            value={expertField}
                            onChange={(e) => setExpertField(e.target.value)}
                        >
                            <option value="" disabled>
                            Select a Field
                            </option>
                            <option value="Cyber-Bullying">Cyber Bullying</option>
                            <option value="Sexual-Harassment">Sexual Harassment</option>
                            <option value="Eating-Disorders">Eating Disorders</option>
                        </select>   
                    </>
                )}

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignupPage