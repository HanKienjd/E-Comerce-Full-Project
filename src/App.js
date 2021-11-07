import React from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";
import CategoriesScreen from "./screens/CategoriesScreen";

function App() {
  const history = useHistory();

  return (
    <Router history={history}>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/orders" component={OrdersScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/order/:id" component={OrderScreen} />
      <Route path="/products" component={ProductsScreen} />
      <Route path="/shipping" component={ShippingScreen} />
      <Route path="/payment" component={PaymentScreen} />
      <Route path="/placeorder" component={PlaceOrderScreen} />
      <Route path="/signin" component={SigninScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />l
      <Route path="/category/:id?" component={CategoriesScreen} />
    </Router>
  );
}

export default App;
