// src/components/Footer.jsx
import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-10 bg-purple-100 text-base-content">
      <div className="grid sm:grid-cols-3 gap-6">
        {/* Services */}
        <nav>
          <h6 className="footer-title font-bold mb-2">Services</h6>
          <a className="link link-hover block">Branding</a>
          <a className="link link-hover block">Design</a>
          <a className="link link-hover block">Marketing</a>
          <a className="link link-hover block">Advertisement</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title font-bold mb-2">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Jobs</a>
          <a className="link link-hover block">Press kit</a>
        </nav>

        {/* Social */}
        <nav>
          <h6 className="footer-title font-bold mb-2">Social</h6>
          <div className="flex gap-4 text-2xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-600 transition-colors" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-700 transition-colors" />
            </a>
          </div>
        </nav>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
