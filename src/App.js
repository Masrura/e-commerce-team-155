import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Dashboard from './Pages/Dasboard/Dashboard/Dashboard';
import WearRoute from './Pages/WearRoute/WearRoute';
import TechRoute from './Pages/TechRoute/TechRoute';
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <div className='App'> 
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Wear' element={<WearRoute/>} />
        <Route path='/Tech' element={<TechRoute/>} />
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
