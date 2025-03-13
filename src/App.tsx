import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from './components/main pages/Intro';
import About from './components/main pages/About';
import Expertise from './components/main pages/Expertise';
// import Academic from './components/Academic';
import Portfolio from './components/main pages/Portfolio';
import Experience from './components/main pages/Experience';
import NotFound from './components/common/404';
import store from "./redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import QueryTest from './components/main pages/QueryTest';
import PortfolioLayout from './components/layout/PortfolioLayout';
import ProjectLayout from './components/layout/ProjectLayout';
const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<PortfolioLayout />}>
              <Route path='/' element={<Intro />}></Route>
              <Route path='/intro' element={<Intro />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/expertise' element={<Expertise />}></Route>
              {/* <Route path='/academic' element={<Academic />}></Route> */}
              <Route path='/professional' element={<Experience />}></Route>
              <Route path='/personal' element={<Portfolio />}></Route>
            </Route>
            <Route element={<ProjectLayout />}>
              <Route path='/news_sentiment_analysis' element={<QueryTest />}></Route>
              <Route path='/test' element={<QueryTest />}></Route>
            </Route>
            <Route path='*' element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
