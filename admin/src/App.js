import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Components/Admin/Admin';
import ExpertsContextProvider from './Context/ExpertsContext';


function App() {

  useEffect(() => {
    document.title = 'Admin panel';
  }, []);

  return (
    <BrowserRouter> 
      <ExpertsContextProvider>
        <Navbar />
        <Admin />
      </ExpertsContextProvider>
    </BrowserRouter>
  );
}

export default App;
