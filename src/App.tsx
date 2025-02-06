import './App.css'
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from './components/Intro';
import About from './components/About';
import Expertise from './components/Expertise';
// import Academic from './components/Academic';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import NotFound from './components/404';


function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Intro />}></Route>
        <Route path='/intro' element={<Intro />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/expertise' element={<Expertise />}></Route>
        {/* <Route path='/academic' element={<Academic />}></Route> */}
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='*' element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
