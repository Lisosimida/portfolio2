import React from 'react';
import Image from 'next/image';

const Logo = ({ className = "", size = 40 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Replace this with your custom logo image */}
      <div className="relative" style={{ width: size, height: size }}>
        {/* Default placeholder - replace with your logo image */}
        <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
          <span className="text-white font-bold text-sm">LS</span>
        </div>
        
        {/* Uncomment and replace with your actual logo image */}
        {/*
        <Image
          src="/logo.png" // Replace with your logo path
          alt="Li Soh - AI Engineer Portfolio"
          width={size}
          height={size}
          className="rounded-lg"
          priority
        />
        */}
      </div>
      
      {/* Optional: Add text alongside the logo */}
      <span className="ml-3 text-lg font-semibold tracking-wide text-white dark:text-white">
        Li Soh
      </span>
    </div>
  );
};

export default Logo;