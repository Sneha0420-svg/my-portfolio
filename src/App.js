import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import First from './components/First';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Cv from './components/Cv';
import About from './components/About';
import DrawerAppBar from './components/DrawerAppBar';

function App() {
  return (
    <>
    <BrowserRouter>
    <DrawerAppBar/>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Cv' element={<Cv/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
