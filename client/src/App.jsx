import { BrowserRouter, Routes, Route } from 'react-router';

// Pages
import Home from './pages/HomePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import SingleQuestionPage from './pages/SingleQuestionPage.jsx';
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import QuestionForm from './components/QuestionForm.jsx';
import AnswerForm from './components/AnswerForm.jsx';
import Header from "./components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <Header/>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />

                <Route path="/cyber-bullying" element={<CategoryPage category="Cyber Bullying"/>} />
                <Route path="/sexual-harassment" element={<CategoryPage category="Sexual Harassment"/>} />
                <Route path="/eating-disorders" element={<CategoryPage category="Eating Disorders"/>} />
                <Route path="/question-form" element={<QuestionForm />} />

                <Route path="/:category/:id" element={<SingleQuestionPage />} />
                <Route path="/:category/:id/add-answer" element={<AnswerForm />} />
            </Routes>

            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;

