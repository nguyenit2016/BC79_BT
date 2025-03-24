import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Template from './template/Template'
import Loading from './components/Loading/Loading'
import DetailMoviePage from './pages/DetailMoviePage/DetailMoviePage'
import AdminPage from './pages/AdminPage/AdminPage'
import AdminMoviesPage from './pages/AdminMoviesPage/AdminMoviesPage'
import AdminTemplate from './template/AdminTemplate'
import AdminEditMovie from './pages/AdminMoviesPage/AdminEditMovie'
import AdminAddMovie from './pages/AdminMoviesPage/AdminAddMovie'
import AdminShowTime from './pages/AdminMoviesPage/AdminShowTime'

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
          <Route path='/admin' element={<AdminTemplate content={<AdminPage />} />} ></Route>
          <Route path='/admin/films' element={<AdminTemplate content={<AdminMoviesPage />} />} ></Route>
          <Route path='/admin/films/edit/:maPhim' element={<AdminTemplate content={<AdminEditMovie />} />} ></Route>
          <Route path='/admin/films/showtime/:maPhim' element={<AdminTemplate content={<AdminShowTime />} />} ></Route>
          <Route path='/admin/films/addnew' element={<AdminTemplate content={<AdminAddMovie />} />} ></Route>
          <Route path='/admin/films/showtime' element={<AdminTemplate content={<AdminShowTime />} />} ></Route>
          {/* Tạo route khi user nhập sai url */}
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
