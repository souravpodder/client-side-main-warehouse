
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/AddItem/AddItem';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Login from './Components/Login/Login';
import ManageInventory from './Components/ManageInventory/ManageInventory';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/add' element={<AddItem />}></Route>
        <Route path='/inventory/:id' element={<ItemDetails />}></Route>
        <Route path='/manage' element={<ManageInventory />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes >


    </div >
  );
}

export default App;
