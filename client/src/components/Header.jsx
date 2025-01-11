import logo from "../images/logo.png";
import AskQuestionButton from "./AskQuestionButton.jsx";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-content">
            <Link to="/">
                <div className="header-left">
                    <img src={logo} alt="App Logo" className="app-logo"/>
                    <h1 className="app-title">SafeSpace</h1>
                </div>
            </Link>

            <div className="line-separator"></div>

            <div className="header-right">

                <div className="signup-login">
                    <Link to='/signup'>Sign up</Link>
                    <Link to='/login'>Log in</Link>
                </div>

                <AskQuestionButton/>
            </div>
        </div>
    )
}

export default Header