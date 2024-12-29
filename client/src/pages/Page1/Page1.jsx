import "./page1.css";
import PropTypes from "prop-types";

/*
use props to pass data to define the current page
for now we pass a title
*/

const Page1 = (props) => {

    const title = props.title;
    return (
        <div className="Page1">
            <h1>{title}</h1>
        </div>
    );
}

Page1.propTypes = {
    title: PropTypes.string.isRequired, 
};


export default Page1;