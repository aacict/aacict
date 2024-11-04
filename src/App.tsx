import './App.css'
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './components/Welcome';
import About from './components/About';
import Expertise from './components/Expertise';
import Academic from './components/Academic';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <BrowserRouter>
     <Nav></Nav>
     <Routes>
      <Route path='/' element={<Welcome/>}></Route>
      <Route path='/welcome' element={<Welcome/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/expertise' element={<Expertise/>}></Route>
      <Route path='/academic' element={<Academic/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
