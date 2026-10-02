import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      {" "}
      <div className="site-footer-inner">
        {" "}
        <div>
          {" "}
          <strong>KBoardTester</strong>{" "}
          <p>Simple keyboard testing directly in your browser.</p>{" "}
        </div>
        <nav aria-label="Footer navigation">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Home
          </Link>
          <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
            About
          </Link>
          {/* <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            Contact
          </Link> */}
          {/* <Link to="/privacy">Privacy Policy</Link> */}
          {/* <Link to="/terms">Terms of Use</Link> */}
        </nav>
        <div className="site-footer-copy">
          🙂 {new Date().getFullYear()} KBoardTester
        </div>
      </div>
    </footer>
  );
}

export default Footer;
