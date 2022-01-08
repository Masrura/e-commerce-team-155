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
import Wishlist from './Pages/Wishlist/Wishlist';
import FoodDetails from './Pages/FoodsRoute/FoodDetails'
import Orders from './Pages/Orders/Orders';
import MyOrders from './Pages/Orders/MyOrders';
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
            <Route path='/Wishlist' element={<PrivateRoute><Wishlist /></PrivateRoute>}/>
            <Route path='/contectus' element={<ContectUs/>} />
            <Route path="/product/:productId" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
            <Route path="/gadget/:gadgetId" element={<PrivateRoute><GadgetDetails /></PrivateRoute>} />
            <Route path="/food/:foodId" element={<PrivateRoute><FoodDetails /></PrivateRoute>} />
            <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path='/place-order' element={<PrivateRoute><Orders /></PrivateRoute>} />
            <Route path='/my-orders' element={<PrivateRoute><MyOrders /></PrivateRoute>} />
            <Route path='*' element={<ErrorPage />} />
            
            
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
    
  );
}

export default App;
