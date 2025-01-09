import React from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-700 bg-opacity-50 backdrop-blur-md p-4 border-b border-gray-800">
      <div>
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
