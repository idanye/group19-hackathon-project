import { BrowserRouter, Routes, Route } from 'react-router'
// Pages
import Home from './pages/HomePage.jsx';
import Page1 from './pages/Page1.jsx';
// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import QuestionForm from './components/QuestionForm.jsx';
import AddQuestionButton from './components/AddQuestionButton.jsx';

function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cyber-bullying" element={<Page1 title="Cyber Bullying"/>} />
                <Route path="/sexual-harassment" element={<Page1 title="Sexual Harassment"/>} />
                <Route path="/eating-disorders" element={<Page1 title="Eating Disorders"/>} />
                <Route path="/question-form" element={<QuestionForm />} />
            </Routes>
            <AddQuestionButton />
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
