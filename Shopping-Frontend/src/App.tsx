import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Authpage from './components/pages/AuthPage'
import AddProductPage from './components/pages/AddProductPage'
import ListProduct from './components/pages/listProduct'
import AddUserPage from './components/pages/AddUserPage'
import ListUsersPage from './components/pages/ListUsersPage'
import MainPage from './components/pages/mainPage'
import ShowProduct from './components/pages/showProduct'
import InformationProductPage from './components/pages/informationProductPage'

/*
* react-router-dom
* axios
* sweetalert
*/

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authpage />}/>
          <Route path='main-page/' element={<MainPage />}/>
          <Route path='product/' element={<ListProduct />}/>
          <Route path='product/add' element={<AddProductPage />}/>
          <Route path='user/add' element={<AddUserPage />} />
          <Route path='user/' element={<ListUsersPage />} />
          <Route path='products/' element={<ShowProduct />}/>
          <Route path='product/show/view/:id' element={<InformationProductPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
