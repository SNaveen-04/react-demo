import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<h3>Error 404 Page Not Found</h3>}/>
      </Routes>
    </div>
  );
}

export default App;
