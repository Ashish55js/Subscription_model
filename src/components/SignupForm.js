import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { signUp } from '../operations/auth';
import { apiConnector } from '../services/apiconnector';
import { api } from '../services/apis';
import {useNavigate} from 'react-router-dom';

const{
    SIGN_UP_API,
  }=api;
  
  export default function SignupForm() {

    const navigate=useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async(event) => {
        
        event.preventDefault();
        // console.log("form data "+data);
        const signUpData = {
            name,
            email,
            password
        }
        // console.log("signup data "+signUpData.name);
        try{
            const response = await apiConnector("POST", SIGN_UP_API, signUpData);
            if(response.data.success){
              console.log("plan created successful.");
            }
          }catch(error){
            console.log(error);
          }
        
    };

    return (
        <div className="flex justify-center bg-blue-300 items-center h-screen">
        <form className="w-1/3 p-6 bg-white rounded-xl shadow-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
            <div className="mb-4">
            <label className="float-left text-sm font-medium mb-1">Name:</label>
            <input
                type="text"
                className="w-full p-2 border rounded"
                value={name}
                placeholder='please enter your name'
                onChange={handleNameChange}
                required
            />
            </div>
            <div className="mb-4">
            <label className="float-left text-sm font-medium mb-1">Email:</label>
            <input
                type="email"
                className="w-full p-2 border rounded"
                value={email}
                placeholder='please enter your email'
                onChange={handleEmailChange}
                required
            />
            </div>
            <div className="mb-6">
            <label className="float-left text-sm font-medium mb-1">Password:</label>
            <input
                type="password"
                className="w-full p-2 border rounded"
                value={password}
                placeholder='please enter your password'
                onChange={handlePasswordChange}
                required
            />
            </div>
            <div className='flex flex-row p-2'>
                <input
                    type="checkbox"
                    className="border rounded"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <p>Remember Me</p>
            </div>
            <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
            Sign Up
            </button> 
            <div className=''>
                Already have an account please <Link className='text-blue-100' to="/login">login</Link> here
            </div>         
        </form>
        </div>
    );
};


