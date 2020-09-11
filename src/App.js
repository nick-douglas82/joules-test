import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/actions/products";

import './assets/app.scss';
import SubNavigation from './components/Navigation/SubNavigation';
import Logo from './components/Logo';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      await dispatch(getProducts());
    };
    loadProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <SubNavigation />
      <Logo />
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
