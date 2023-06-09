import React from "react";
import "./Footer.css";
import logo from '/dove.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex justify-between flex-wrap space-y-[20px] mt-[100px] p-3 md:p-10">
      <div className="space-y-[20px]">
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
        <p>
        We’re always in search for <br /> talented and motivated
        people. <br />Don’t be shy introduce yourself!
        </p>
        <div className="flex items-center gap-[10px]">
            <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F6F6F6] text-[#6b7385] text-lg hover:bg-[#2f57ef] hover:text-white duration-300"> <FaFacebookF /> </span>
            <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F6F6F6] text-[#6b7385] text-lg hover:bg-[#2f57ef] hover:text-white duration-300"> <FaTwitter /> </span>
            <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F6F6F6] text-[#6b7385] text-lg hover:bg-[#2f57ef] hover:text-white duration-300"> <FaInstagram /> </span>
            <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F6F6F6] text-[#6b7385] text-lg hover:text-white duration-300 hover:bg-[#2f57ef]"> <FaLinkedinIn /> </span>
        </div>
        <div className="relative">
        <button data="Contact with Us" className="button-wrapper">
         </button>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-xl mb-5">Useful Links</h2>
        <Link className="text-[#6B7385]">Marketplace</Link>
        <Link className="text-[#6B7385]">FAQ</Link>
        <Link className="text-[#6B7385]">About Us</Link>
        <Link className="text-[#6B7385]">Privacy Policy</Link>
        <Link className="text-[#6B7385]">Marketplace</Link>
        <Link className="text-[#6B7385]">FAQ</Link>
        <Link className="text-[#6B7385]">About Us</Link>
        <Link className="text-[#6B7385]">Privacy Policy</Link>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-xl mb-5">Our Community</h2>
        <Link className="text-[#6B7385]">Contact Us</Link>
        <Link className="text-[#6B7385]">Become Teacher</Link>
        <Link className="text-[#6B7385]">Blog</Link>
        <Link className="text-[#6B7385]">Events</Link>
        <Link className="text-[#6B7385]">Contact Us</Link>
        <Link className="text-[#6B7385]">Become Teacher</Link>
        <Link className="text-[#6B7385]">Blog</Link>
        <Link className="text-[#6B7385]">Events</Link>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-xl mb-5">Get Contact</h2>
        <Link className="text-[#6B7385]">Phone : (406) 555-0120</Link>
        <Link className="text-[#6B7385]">Email: admin@example.com</Link>
        <h2 className="font-bold my-5">News Letter</h2>
        <p>
        2000+ Our students are subscribe Around the World.<br />
        Don’t be shy introduce yourself!
        </p>
        <input type="text" className="border-0 outline-none my-3 h-[40px]" placeholder="Email Here" />
        <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] border-2 border-gradient rounded-lg px-4 py-2 text-white">
        Subscribe Now
    </button>
      </div>
    </div>
  );
};

export default Footer;
