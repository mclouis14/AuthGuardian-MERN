import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = 'https://authguardian-q29g.onrender.com'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
    <Navbar />
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
