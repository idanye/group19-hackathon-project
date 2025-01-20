import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ExpertsContextProvider from './Context/ExpertsContext';
import MainContent from "./Components/MainContent";

function App() {

  useEffect(() => {
    document.title = 'Admin panel';
  }, []);

  return (
    <BrowserRouter> 
      <ExpertsContextProvider>
        <Navbar />
        <MainContent/>
      </ExpertsContextProvider>
    </BrowserRouter>
  );
}

export default App;
