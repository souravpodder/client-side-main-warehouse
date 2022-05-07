
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/AddItem/AddItem';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
import Register from './Components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/add' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ItemDetails />
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>

        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes >

      <ToastContainer />
    </div >
  );
}

export default App;
