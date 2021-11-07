import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainContent(props) {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <div className="grid-container">
      <Header />
      <main className="main">
        <div className="content">
          <div className="bg-gray-500 h-12 flex items-center">
            <ul className="flex flex-row space-x-6 mx-8 text-white">
              <button onClick={openMenu}>
                <i className="fas fa-bars" /> All
              </button>
              <li>
                <Link to="#">Today's Deals</Link>
              </li>
              <li>
                <Link to="/shop">Custom Service</Link>
              </li>
              <li>
                <Link to="/about">Gift Cart</Link>
              </li>
              <li>
                <Link to="/contact">Sell</Link>
              </li>
            </ul>
          </div>

          {props.children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainContent;
