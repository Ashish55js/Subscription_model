import React, {useState} from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate} from 'react-router-dom';
import { apiConnector } from '../services/apiconnector';
import { api } from '../services/apis';

const{
  LOGIN_API,
}=api;

export default function () {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    
    event.preventDefault();
    // You can perform login logic here
    try{
        let res = await apiConnector("POST", LOGIN_API, {
          email,
          password
        })
        toast.success("Login Successful");
        navigate('/user-plan');
        console.log("user "+res);
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center bg-blue-300 items-center h-screen">
      <form className="w-1/3 p-6 bg-white rounded shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password:</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
