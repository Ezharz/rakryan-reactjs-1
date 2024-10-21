import React, { useState } from "react";

function Header() {

  return (
    <header className="bg-white text-gray-800 p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logoipsum-282.svg" alt="E-Commerce Logo" className="h-8 mr-4 transition-transform duration-300 hover:scale-110" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600 transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-300">Products</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-300">About</a>
          <a href="#" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
        </div> 
      </nav>
        <div className="md:hidden mt-4">
          <a href="#" className="block py-1 hover:bg-gray-100 transition-colors duration-300">Home</a>
          <a href="#" className="block py-1 hover:bg-gray-100 transition-colors duration-300">Products</a>
          <a href="#" className="block py-1 hover:bg-gray-100 transition-colors duration-300">About</a>
          <a href="#" className="block py-1 hover:bg-gray-100 transition-colors duration-300">Contact</a>
        </div>
    </header>
  );
}

export default Header;