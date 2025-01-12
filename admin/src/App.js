import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Components/Admin/Admin';


function App() {

  useEffect(() => {
    document.title = 'Admin panel';
  }, []);

  return (
    <BrowserRouter> 
      <Navbar />
      <Admin />
    </BrowserRouter>
  );
}

export default App;
