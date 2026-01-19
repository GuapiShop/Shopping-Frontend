import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Authpage from './components/pages/authPage'
import AddProductPage from './components/pages/addProductPage'
import EditProductPage from './components/pages/editProductPage'
import ListProduct from './components/pages/listProduct'
import AddUserPage from './components/pages/addUserPage'
import ListUsersPage from './components/pages/listUsersPage'
import MainPage from './components/pages/mainPage'

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
          <Route path='product/edit/{id}' element={<EditProductPage />}/>
          <Route path='user/add' element={<AddUserPage />} />
          <Route path='user/' element={<ListUsersPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
