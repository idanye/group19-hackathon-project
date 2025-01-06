import { useParams } from 'react-router';

const SingleQuestionPage = () => {
    const { category, id } = useParams()

    // use useFetch and use the category and id to create the right path to get the data....
    return (
        <div>
            <h1>Single Question Page</h1>
            <p>Category: {category}</p>
            <p>Id: {id}</p>
        </div>
    )
}

export default SingleQuestionPage;