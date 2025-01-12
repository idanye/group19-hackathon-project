import { useState } from "react";

const SignupPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [userType, setUserType] = useState('regular')

    // expert additional information
    const [expertID, setExpertID] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        let expertName;
        const user = {
            userType,
            name: userType === 'expert' ? expertName : name,
            email,
            password,
            ...(userType === 'expert' && { expertID })
        };

        console.log(user)
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
                    </>
                )}

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignupPage