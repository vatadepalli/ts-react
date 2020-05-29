import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <div className="Footer">
      <div style={{display: "flex"}}>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/terms">Terms</Link>
      </div>
    </div>
  );
}

export default Footer;