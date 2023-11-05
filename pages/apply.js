"use client"
import React, { useState } from 'react';
import styles from'../styles/apply.module.css';
import {toast} from'react-toastify';
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from 'next/router';
const Apply = () => {
  const router =useRouter();
  const[handel,setHandel]=useState('')
  const [Email,setEmail]=useState('')
  const [Password ,setPassword]=useState('')
  const [category , setCategory]=useState('')
const [submitted,setSubmitted]=useState(false)
  const handelCategoryChange=(e)=>{
  setCategory(e.target.value);
 }
 
 const handelRegiter = (e) => {
  e.preventDefault();
  if (!category) return toast.error('Add A Category ');

  const values = {
    Email,
    Password,
    handel,
    category,
  };

  axios
    .post('http://localhost:5000/register', values)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  // Reset the form fields
  setHandel('');
  setEmail('');
  setPassword('');
  setCategory('');
 }
 return (
<>
<section className={styles.background + "min-h-screen flex justify-center items-center"}>
  <img src="https://img.freepik.com/premium-photo/modern-workspace-with-laptop-computer-coffee-cup-notebook-smart-phone-dark-blue-leather_35674-12044.jpg" style={{width:"100%", position:"absolute", height:"600px"}}/>
<div className='main'>
  <div className='content border-2 px-4 py-8 rounded-2xl shadow-lg'>
  <h1 className='text-2 xl font-bold text-center' style={{color:"white"}}>
join the top 1% creators
  </h1>
  <p className='text-center' style={{color:"white"}}> create link for your brand</p>
  <p className='text-center py-5 font-bold-text-gray-500' style={{color:"white"}}> Start building your Hub </p>
<form onSubmit={handelRegiter} className='flex flex-col gap-4 text-lg mt-10'>
  <span className='flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
  <svg xmlns="http://www.w3.org/2000/svg" width="23" margin-right="4px" viewBox="0 0 102 102" id="instagram"><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stopColor="#fa8f21"></stop><stop offset=".78" stopColor="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop><stop offset="1" stopColor="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 16"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 17"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" data-name="Path 18" transform="translate(-422.637 -426.196)" ></path></svg>
  <input value={handel} onChange={e=>setHandel(e.target.value)} className='focus:outline-none ml-3' type='text' placeholder='Social Handel' required></input>
</span>
  <input value={Password} onChange={e=>setPassword(e.target.value)} className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type='password' placeholder='set a password ' required></input>
<input value={Email} onChange={e=>setEmail(e.target.value)} className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type='email' placeholder='Enter your Email' required></input>
<h5 className='text-sm text-center'>Account Type:</h5>
<span className='flex'>
<label className='flex flex-row mr-3'>
  <input type='checkbox' value="Creator" checked ={category==="Creator"} onChange={handelCategoryChange}/>
<p className='pl-1'>Creator</p>

</label>
<label className='flex flex-row mr-3'>
  <input type='checkbox' className='px-2 inline-block' value="Agency" checked ={category==="Agency"} onChange={handelCategoryChange}/>
<p className='pl-1'>Agency</p>
</label>

<label className='flex flex-row mr-3'>
  <input type='checkbox' value="Brand" checked ={category==="Brand"} onChange={handelCategoryChange}/>
<p className='pl-1'>Brand</p>

</label>
 </span>
 <input className='bg-gray-400 text-white py-2 rounded-lg cursor-pointer btn' type='submit'value="Register" />
 
</form>
  </div>
  <h3 className='text-center text-white pt-3 mt-559 ml-229' >Already have an account?
    <Link className='font-bold text-red-400 ' href='/login'>Login</Link>
    </h3>
</div>

</section>

</>  
)
}
export default Apply



