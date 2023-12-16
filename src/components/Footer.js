import React from 'react';
import logo from '../assets/Logo.png'; // Ensure this is the correct path to your logo file

function Footer() {
  return (
    <footer className="bg-bluish-purple text-white p-5">
       <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left w-full max-w-7xl">
        <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
          <img src={logo} alt="AT Digital" style={{ width: "238.89px", height: "36.11px" }} />
          <p className="mt-2 lg:mt-4" style={{ maxWidth: "413px" }}>
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
          </p>
        </div>
        <div className="flex justify-around flex-grow">
          <div className="mb-4 lg:mb-0">
            <h3 className="font-bold mb-2">Our Technologies</h3>
            <ul>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>GraphQL</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div className="mb-4 lg:mb-0">
            <h3 className="font-bold mb-2">Our Services</h3>
            <ul>
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data Analytics</li>
              <li>Google Marketing Solutions</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <div className="border-t border-white w-full lg:border-none pt-2 lg:pt-0">
            <a href="/privacy" className="hover:underline">Privacy Policy</a> | <a href="/terms" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
