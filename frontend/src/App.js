import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './component/Register';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Loginfile from './component/Loginfile';
import Firstscreen from './component/Firstscreen';
import Home from './component/Home';
import {Toaster} from 'react-hot-toast'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Toaster position='top-center' toastOptions={{duration:2000}}/>
      <Routes>
      <Route path='/' element={<Firstscreen/>}></Route>

        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Loginfile/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
