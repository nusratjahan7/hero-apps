import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-5">
      <div className="w-11/12 mx-auto text-center md:text-left grid md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-3 ">
            App<span className="text-[#26d0ce]">Vault</span> 
          </h2>
          <p className="text-sm text-gray-400">
            Build amazing experiences with our modern app platform.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Docs</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 justify-center md:justify-normal">
            <a href="#" className=" hover:text-white"><FaFacebook/></a>
            <a href="#" className="hover:text-white"><BsTwitter/></a>
            <a href="#" className="hover:text-white"><BsInstagram /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HeroApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;