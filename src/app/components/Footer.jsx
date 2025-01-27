import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container italic p-12 text-sm flex justify-between">
        <span>Kale</span>
        <p className="text-slate-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          © {new Date().getFullYear()} Kale. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
