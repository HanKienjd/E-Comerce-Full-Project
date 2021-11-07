import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log("🚀 ~ file: Header.jsx ~ line 8 ~ Header ~ userInfo", userInfo);

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <>
      <header className="header">
        <div className="brand mx-6">
          <Link to="/">Ecomerce</Link>
        </div>
        <div className="filter max-w-screen-md">
          <input
            name="searchKeyword"
            className="nav-search"
            // onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button type="submit" className="bg-yellow-300 mx-1">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="header-links">
          <Link to="/cart">Cart</Link>
          {userInfo ? (
            <Link to="/profile">{userInfo.name}</Link>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <a href="#">Admin</a>
              <ul className="dropdown-content">
                <li>
                  <Link to="/orders">Orders</Link>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="text-white ml-16">
            Hello {userInfo && userInfo.name}
          </div>
        </div>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul className="categories">
          <li>
            <Link to="/category/Pants">Pants</Link>
          </li>

          <li>
            <Link to="/category/Shirts">Shirts</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Header;
