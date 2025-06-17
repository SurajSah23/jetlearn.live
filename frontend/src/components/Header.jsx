import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white-600 via-white-600 to-white-700 text-white py-6 px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-end">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.ibb.co/B5n1pz2b/66c868bab382aad839e2016b-Full-Jetlearn-logo.png"
            alt="JetLearn Logo"
            className="h-12 w-40"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
