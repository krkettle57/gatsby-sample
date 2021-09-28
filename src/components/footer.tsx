import React from "react";

const Footer: React.VFC = () => (
  <footer className="text-white bg-primary">
    <div className="container flex items-center justify-center p-6 mx-auto">
      © {new Date().getFullYear()} krkettle
    </div>
  </footer>
);

export default Footer;
