
import { Link } from 'react-router-dom';
// 404 page
const NotFoundPage = () => {
    return (
        <div className='not-found'>
            <h1>Oops! Page Not Found</h1>
            <p>We are sorry, but the page you are looking for does not exist</p>
            <Link to="/"><p className='not-found-redirect-msg'>Click here to go back to the homepage</p></Link>
      </div>
    );
 }

export default NotFoundPage;