import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom"

export default function Signup() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: '',
  })
  
  const signupUser = async (e) => {
    e.preventDefault();
    const {name, email, password, confirmPassword, dateOfBirth, gender} = data
    try {
      const {data} = await axios.post('/signup', {
        name, email, password, confirmPassword, dateOfBirth, gender
      })
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login Successful. Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={signupUser}>
        <label>Name</label>
        <input type='text' id='name' placeholder='Enter name' autoComplete='off' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        <label>Email</label>
        <input type='email' id='email' placeholder='Enter email' autoComplete='off' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label>Password</label>
        <input type='password' id='password' placeholder='Enter password' required value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <label>Confirm Password</label>
        <input type='password' id='confirmPassword' placeholder='Confirm password' required value={data.confirmPassword} onChange={(e) => setData({...data, confirmPassword: e.target.value})} />
        <label>Date of Birth</label>
        <input type='date' id='dateOfBirth' />
        <div class='gender-options'>
          <label>Male</label>
          <input type='radio' name='gender' value={data.gender} onChange={(e) => setData({...data, gender: e.target.value})} />
          <label>Female</label>
          <input type='radio' name='gender' value={data.gender} onChange={(e) => setData({...data, gender: e.target.value})} />
        </div>
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}
