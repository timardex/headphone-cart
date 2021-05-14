import React, { useState } from 'react';
import GetWindowSize from './helpers/getWindowSize.js';

import Header from './components/Header';
import Product from './components/Product';
import Description from './components/Product/Description';
import Details from './components/Product/Details';
import Image from './components/Product/Image';
import Footer from './components/Footer';
import Notification from './components/Notification';

const App = () => {
  const [width] = GetWindowSize();

  const tabMenu = [
    {linkText: 'Description', component: <Description />},
    {linkText: 'Details', component: <Details />},
  ];

  const [page, setPage] = useState(0);
  const getPage = tabMenu[page] ? tabMenu[page].component : null;

  const product = {
    title: 'Audio-Technica ATH-MSR7',
    subTitle: '2017 Best Headphones of the Year Award Winner',
    colors: ['black', 'brown'],
    price: {
      newPrice: '$59.99',
      oldPrice: '$89.99',
    }
  };

  const getImagePath = (name) => {
    return require(`./assets/images/${name}.jpg`).default;
  }

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
          product={product}
          tabMenu={tabMenu}
          page={page}
          setPage={setPage}/>

        <Product
          product={product}
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

      {notify && <Notification product={product} color={selectedColor}/>}
    </div>
  );
}

export default App;
