import React, { useState } from "react";

function CategoriesScreen() {
  const [isVisible, setIsVisible] = useState(false);

  const onHandleOpenMenu = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="grid-container">
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../../public/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default CategoriesScreen;
