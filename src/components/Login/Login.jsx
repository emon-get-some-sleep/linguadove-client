import React from 'react';
import logo from '/dove.png'
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Login Container */}
      <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
        <div className="mb-8 flex justify-center">
          {/* <img className="w-24" src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg" alt="" /> */}
          <div className="md:text-lg text-sm font-bold flex items-center">
            <img src={logo} className="max-w-[50px] max-h-[50px] object-cover" alt="" />
             <span className="text-gradient bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-transparent bg-clip-text">LinguaDove</span>
        </div>
        </div>
        <div className="flex flex-col text-sm rounded-md">
          <input className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Username or Email id" />
          <input className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" />
        </div>
        <button className="mt-5 w-full border p-2 bg-gradient-to-r from-[#2f57ef] bg-[#B260EC] text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit">Sign in</button>
        <div className="mt-5 flex justify-between text-sm text-gray-600">
          <a href="#">Forgot password?</a>
          <a href="#">Sign up</a>
        </div>
        <div className="flex justify-center mt-5 text-sm">
          <p className="text-gray-400">or you can sign with</p>
        </div>
        <div className="mt-5 flex justify-center gap-3">
          <button>
            <FaGoogle />
          </button>
        </div>
        <div className="mt-5 flex text-center text-sm text-gray-400">
          <p>
            This site is protected by reCAPTCHA and the Google <br />
            <a className="underline" href="">Privacy Policy</a>  and <a className="underline" href="">Terms of Service</a>  apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
