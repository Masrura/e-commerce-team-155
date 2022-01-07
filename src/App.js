import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Dashboard from './Pages/Dasboard/Dashboard/Dashboard';
import WearRoute from './Pages/WearRoute/WearRoute';
import TechRoute from './Pages/TechRoute/TechRoute';
import SignIn from "./Pages/SignIn/SignIn";
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import GadgetDetails from './Pages/GadgetDetails/GadgetDetails';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Register from './Pages/SignIn/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddProduct from './Pages/Admin/AddProduct/AddProduct';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import Inventory from './Pages/Admin/Inventory/Inventory';
import Cart from './Pages/Cart/Cart';
import DashboardHome from "./Pages/Dasboard/Dashboard/DashboardHome";
import ContectUs from './Pages/ContectUs/ContectUs';
import FoodsRoute from './Pages/FoodsRoute/FoodsRoute'

function App() {
  return (
    <div className='App'> 
      <AuthProvider>
        <BrowserRouter>
            <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Wear' element={<WearRoute/>} />
            <Route path='/Tech' element={<TechRoute/>} />
            <Route path='/Food' element={<FoodsRoute/>} />


            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route exact path="/dashboard/dashboardhome" element={<DashboardHome></DashboardHome>}>
              </Route>
              
              <Route path={`/dashboard/makeAdmin`} element={
                <MakeAdmin></MakeAdmin>
              }>
              </Route>
              <Route path={`/dashboard/inventory`} element={
                <Inventory></Inventory>
             }>
              </Route>
              <Route path={`/dashboard/addproduct`} element={
                <AddProduct></AddProduct>
             }>
              </Route>
            </Route>


            <Route path='/login' element={<SignIn/>}/>
            <Route path='/register' element={<Register />} />
            <Route path='/addProduct' element={<AddProduct />} />
            <Route path='/makeadmin' element={<MakeAdmin />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/contectus' element={<ContectUs/>} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/gadget/:gadgetId" element={<GadgetDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<ErrorPage />} />
            
            
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
    
  );
}

export default App;
