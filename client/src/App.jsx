import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Page1 from './pages/Page1/Page1';
import Footer from './pages/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 title = "page1"/>} />
        <Route path="/page2" element={<Page1 title = "page2"/>} />
        <Route path="/page3" element={<Page1 title = "page3"/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
