import 'semantic-ui-css/semantic.min.css'
// import New from './Components/Course'
import Cards from './Components/Cards'
import Home from './Components/Home'
import About from './Components/About'
import {  Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/card' element={<Cards/>}/>
      </Routes>
    </div>
    
  )
}

export default App