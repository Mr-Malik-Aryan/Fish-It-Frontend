
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Upload from './components/upload';
import Download from './components/download';
import About from './components/about';
function App() {

  return (
    <>
    

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/about' element={<About />}></Route>
          <Route
            path='/upload'
            element={<Upload/>}

          />
          <Route path='/download' element={<Download/>}></Route>
      
        </Routes>
      </BrowserRouter>
    </>
  );

}
export default App;
