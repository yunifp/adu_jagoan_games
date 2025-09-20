import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader flex justify-center items-center h-screen">
      <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};

export default Preloader;