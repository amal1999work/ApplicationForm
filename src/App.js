import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import ApplicationForm from './components/ApplicationForm';
import ApplicationViews from './components/ApplicationViews';

function App() {
  return (
     
    <>
    <BrowserRouter>
    
    <Routes>
      
    
      < Route path='/' element={<ApplicationForm/>}/>
      < Route path='/applicationView' element={<ApplicationViews/>}/>
      
      
      
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
