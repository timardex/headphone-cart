import React, { useState } from 'react';
import GetWindowSize from './helpers/getWindowSize.js';
import getImagePath from './helpers/getImagePath.js';
import productInfo from './helpers/productInfo.js';
import tabMenu from './helpers/tabMenu.js';

import Header from './components/Header';
import Product from './components/Product';
import Image from './components/Product/Image';
import Footer from './components/Footer';
import Notification from './components/Notification';

const App = () => {
  const [width] = GetWindowSize();

  const [page, setPage] = useState(0);
  const getPage = tabMenu[page] ? tabMenu[page].component : null;

  const [selectedColor, setColor] = useState('black');
  const [notify, setNotify] = useState(false);
  const [toggleText, setToggleText] = useState('Add to cart');

  const addToCart = () => {
    const promise_1 = new Promise((resolve) => {
      setToggleText('Loading ...');
      resolve();
    });

    const promise_2 = new Promise((resolve) => {
      setTimeout(() => {
        setNotify(true);
        resolve();
      }, 2000);
    });

    const promise_3 = new Promise((resolve) => {
      setTimeout(() => {
        setToggleText('View Cart');
        setNotify(false);
        resolve();
      }, 4000);
    });
    Promise.all([promise_1, promise_2, promise_3]);
  };

  return (
    <div className="App">
      <div className="col-left">
        <Header
          product={productInfo}
          tabMenu={tabMenu}
          page={page}
          setPage={setPage}/>

        <Product
          product={productInfo}
          getPage={getPage}
          color={selectedColor}
          setColor={setColor}
          setToggleText={setToggleText}/>

        { width < 768 && <Image imagePath={getImagePath(`ath-msr7-${selectedColor}`)}/>}

        <Footer addToCart={addToCart} toggleText={toggleText}/>
      </div>
      <div className="col-right">
        { width > 768 && <Image imagePath={getImagePath(`ath-msr7-${selectedColor}`)}/>}
      </div>

      {notify && <Notification product={productInfo} color={selectedColor}/>}
    </div>
  );
}

export default App;
