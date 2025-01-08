
import { BrowserRouter, Routes, Route } from 'react-router';

// Pages
import Home from './pages/HomePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import SingleQuestionPage from './pages/SingleQuestionPage.jsx';
// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import QuestionForm from './components/QuestionForm.jsx';
import AnswerForm from './components/AnswerForm.jsx';

import SingleQuestionPage from './pages/SingleQuestionPage.jsx';
import logo from './images/logo.png';
import AskQuestionButton from './components/AskQuestionButton.jsx';



function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <header className="app-header">
                <div className="header-content">
                    <div className="header-left">
                        <img src={logo} alt="App Logo" className="app-logo" />
                        <h1 className="app-title">SafeSpace</h1>
                    </div>
                    <AskQuestionButton />
                </div>
            </header>
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
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;

