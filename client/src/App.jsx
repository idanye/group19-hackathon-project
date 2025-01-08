import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/HomePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import SingleQuestionPage from './pages/SingleQuestionPage.jsx';
// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import QuestionForm from './components/QuestionForm.jsx';
import AddQuestionButton from './components/AddQuestionButton.jsx';
import AnswerForm from './components/AnswerForm.jsx';

function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cyber-bullying" element={<CategoryPage category="Cyber Bullying"/>} />
                <Route path="/sexual-harassment" element={<CategoryPage category="Sexual Harassment"/>} />
                <Route path="/eating-disorders" element={<CategoryPage category="Eating Disorders"/>} />
                <Route path="/question-form" element={<QuestionForm />} />
                <Route path="/:category/:id" element={<SingleQuestionPage />} />
                <Route path="/:category/:id/add-answer" element={<AnswerForm />} />
            </Routes>
            <AddQuestionButton />
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
