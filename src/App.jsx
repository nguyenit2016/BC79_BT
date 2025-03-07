import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Template from './template/Template'
import Loading from './components/Loading/Loading'
import DetailMoviePage from './pages/DetailMoviePage/DetailMoviePage'

function App() {
  return (
    <div>
      <Loading />
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Template content={<HomePage />} />}></Route>
          <Route path='/login' element={<Template content={<LoginPage />} />}></Route>
          <Route path='/detail/:maPhim' element={<Template content={<DetailMoviePage />} />}></Route>
          {/* Tạo route khi user nhập sai url */}
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
