import React, { useContext } from "react";
import logo from "/dove.png";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const newUser = { name: loggedInUser.displayName, email: loggedInUser.email, image: loggedInUser.displayName }
            fetch('https://lingua-dove-server-emon-get-some-sleep.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then((data) => {
                  console.log(data);
                    // navigate(from, { replace: true });
                })
        })
}
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

    createUser(data.email, data.password)
    .then(result => {

        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
            .then(() => {
                const saveUser = { name: data.name, email: data.email, image: data.photoURL }
                fetch('https://lingua-dove-server-emon-get-some-sleep.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            
                        }
                    })



            })
            .catch(error => console.log(error))
    })
  };
  return (
    <div className="flex mt-[100px] flex-col items-center justify-center h-screen">
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
        {/* <div className="flex justify-center mt-5 text-sm">
          <p className="text-gray-400">or you can sign with</p>
        </div>
        <div className="mt-5 flex justify-center gap-3">
          <button onClick={handleGoogleSignIn}>
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

export default Register;
