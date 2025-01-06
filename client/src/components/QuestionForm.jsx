import {useState} from "react";

const QuestionForm = () => {
    const [question, setQuestion] = useState('');
    const [category, setCategory] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [isAnonymous, setIsAnonymous] = useState('no');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, question, category });
        alert('Question submitted successfully!');
    };

    return (
        <div className="page">
            <div className="question-form">
                <h1 className="headline">Question Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label>Question:</label>
                    <input
                        type="text"
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />

                    <label>Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="cyber-bullying">Cyber Bullying</option>
                        <option value="sexual-harassment">Sexual Harassment</option>
                        <option value="eating-disorders">Eating Disorders</option>
                    </select>

                    <label>Post Anonymously:</label>
                    <fieldset>
                        <label>
                            <input
                                type="radio"
                                value="yes"
                                checked={isAnonymous === 'yes'}
                                onChange={(e) => setIsAnonymous(e.target.value)}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="no"
                                checked={isAnonymous === 'no'}
                                onChange={(e) => setIsAnonymous(e.target.value)}
                            />
                            No
                        </label>
                    </fieldset>

                    {isAnonymous === 'no' && (
                        <div>
                            <label>Your Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default QuestionForm;