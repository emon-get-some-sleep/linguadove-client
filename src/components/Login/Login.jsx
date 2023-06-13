import React, { useContext } from "react";
import logo from "/dove.png";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";


const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';
  console.log(from)
  const onSubmit = (data) => {
    // console.log(data);
    signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                  'Good job!',
                  'You are successfully logged In!',
                  'success'
                );
                navigate(from, { replace: true });
            })
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const newUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then((data) => {
                  console.log(data);
                    navigate(from, { replace: true });
                })
        })
}
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Login Container */}
      <form onSubmit={handleSubmit(onSubmit)} className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
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
            {...register("email", { required: true })}
            className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
            type="text"
            placeholder="Username or Email id"
          />
          {errors.email && (
            <span className="text-[#DC143C]">Email is required</span>
          )}
          <input
          {...register("password", { required: true })}
            className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-[#DC143C]">Password is required</span>
          )}
        </div>
        <button
          className="mt-5 w-full border p-2 bg-gradient-to-r from-[#2f57ef] bg-[#B260EC] text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
          type="submit"
        >
          Sign in
        </button>
        <div className="mt-5 flex justify-between text-sm text-gray-600">
          <a href="#">Forgot password?</a>
          <Link to="/register">Sign up</Link>
        </div>
        {/* <div className="flex justify-center mt-5 text-sm">
          <p className="text-gray-400">or you can sign with</p>
        </div>
        <div className="mt-5 flex justify-center gap-3">
          <button>
            <FaGoogle />
          </button>
        </div> */}
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
      <div className="flex justify-center mt-5 text-sm">
          <p className="text-gray-400">or you can sign with</p>
        </div>
        <div className="mt-5 flex justify-center gap-3">
          <button onClick={handleGoogleSignIn}>
            <FaGoogle />
          </button>
        </div>
    </div>
  );
};

export default Login;
