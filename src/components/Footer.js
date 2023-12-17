import React from 'react';
import logo from '../assets/Logo.png'; 

function Footer() {
  return (
    <footer className="bg-bluish-purple text-white p-5 lg:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center relative">
      <div className="flex flex-col items-start mb-10 lg:mb-0">
        <img src={logo} alt="AT Digital" className="w-[238.89px] h-[36.11px]" />
        <p className="mt-2 lg:mt-4 max-w-[413px]">
          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-4 lg:mb-0 lg:mr-8">
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
          <div>
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
      </div>
      <div className="w-full lg:w-auto mt-10 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
          <div className="border-t border-white w-3/4 lg:w-1/4 mx-auto pt-2">
            <a href="/privacy" className="hover:underline">Privacy Policy</a> | <a href="/terms" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      
    </footer>
  );
}

export default Footer;
