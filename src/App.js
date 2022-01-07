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
import Cart from './Pages/Cart/Cart';

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
              <Route path='/Dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
              <Route path='/login' element={<SignIn/>}/>
              <Route path='/register' element={<Register />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/gadget/:gadgetId" element={<GadgetDetails />} />
              <Route path='*' element={<ErrorPage />} />
            
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
    
  );
}

export default App;
