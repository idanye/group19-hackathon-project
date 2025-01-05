import PropTypes from "prop-types";

/*
use props to pass data to define the current page
for now we pass a title
*/

const Page1 = (props) => {
    const title = props.title;

    return (
        <div className="page">
            <h1 className="headline">{title}</h1>
        </div>
    );
}

Page1.propTypes = {
    title: PropTypes.string.isRequired, 
};


export default Page1;