import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20">
      <div className="relative flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8 sm:p-16 lg:p-20">
        
        {/* Text + Buttons */}
        <div className="max-w-md text-center lg:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold mb-6">
            Download mobile app for better experience
          </h1>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="#">
              <img className="h-12 sm:h-14" src={assets.play_store} alt="Google Play" />
            </a>
            <a href="#">
              <img className="h-12 sm:h-14" src={assets.app_store} alt="App Store" />
            </a>
          </div>
        </div>

        {/* Right-side image (hidden on small screens) */}
        <div className="hidden lg:block mt-10 lg:mt-0">
          <img
            className="w-64 sm:w-80"
            src={assets.app_main_img}
            alt="App illustration"
          />
        </div>
      </div>
    </div>
  )
}

export default AppDownload
