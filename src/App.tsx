import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainApp from './components/Pages/MainApp';
import Create from './components/Pages/Create'
import SideBar from './components/SideBar';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <SideBar/>
          <Routes>
            <Route path='/' element={<MainApp/>}/>
            <Route path='/create' element={<Create/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
