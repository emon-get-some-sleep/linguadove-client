import React from "react";
import logo from "/dove.png";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    if(data.password !== data.confirmPassword){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password does not match. Please Check again',
            
          })
          return;
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Login Container */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] "
      >
        <div className="mb-8 flex justify-center">
          <div className="md:text-lg text-sm font-bold flex items-center">
            <img
              src={logo}
              className="max-w-[50px] max-h-[50px] object-cover"
              alt=""
            />
            <span className="text-gradient bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-transparent bg-clip-text">
              LinguaDove
            </span>
          </div>
        </div>
        <div className="flex flex-col text-sm rounded-md">
          <input
            {...register("name", { required: true })}
            className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
            type="text"
            placeholder="Username Please"
          />
          {errors.name && (
            <span className="text-[#DC143C]">Name is required</span>
          )}
          <input
            {...register("photoURL", { required: true })}
            className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
            type="text"
            placeholder="Photo URL"
          />
          {errors.photoURL && (
            <span className="text-[#DC143C]">Photo URL is required</span>
          )}
          <input
            {...register("email", { required: true })}
            className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
            type="text"
            placeholder="Email id Please"
          />
          {errors.email && (
            <span className="text-[#DC143C]">Email is required</span>
          )}
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 mb-5"
            type="password"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-[#DC143C]">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-[#DC143C]">
              Password should be at least six characters long
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-[#DC143C]">
              Password can not be more than 20 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-[#DC143C]">
              Password must have one Uppercase, one Lower case, One number, one
              special character.
            </p>
          )}
          <input
            {...register('confirmPassword', {required: true})}
            className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
            type="password"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <span className="text-[#DC143C]">Confirm passwor is required</span>}
        </div>
        <button
          className="mt-5 w-full border p-2 bg-gradient-to-r from-[#2f57ef] bg-[#B260EC] text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
          type="submit"
        >
          Sign up
        </button>
        <div className="mt-5 flex justify-between text-sm text-gray-600">
          <a href="#">Forgot password?</a>
          <Link to="/login">Login</Link>
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
            <a className="underline" href="">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="underline" href="">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
