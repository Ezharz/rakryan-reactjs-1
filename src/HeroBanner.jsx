import React from "react";

function HeroBanner() {
    return (
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-left md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Tingkatkan Pengalaman Audio Anda
              </h1>
              <p className="text-xl sm:text-2xl text-indigo-100 mb-8">
              Temukan koleksi headset mutakhir kami untuk suara imersif yang belum pernah ada sebelumnya
              </p>
              <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 transform hover:scale-105">
                Jelajahi Sekarang
              </button>
            </div>
            <div className="relative md:w-5/12">
              <img 
                src="public/kiran-ck-cDrIiiptFqE-unsplash.jpg" 
                alt="Premium Headset" 
                className="w-full shadow-lg"
              />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default HeroBanner;