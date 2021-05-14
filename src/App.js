import React, { useState } from 'react';
import GetWindowSize from './helpers/getWindowSize.js';

import Header from './components/Header';
import Product from './components/Product';
import Description from './components/Product/Description';
import Details from './components/Product/Details';
import Image from './components/Product/Image';
import Footer from './components/Footer';

const App = () => {
  const [width] = GetWindowSize();

  const getImagePath = (name) => {
    return require(`./assets/images/${name}.jpg`).default;
  }

  const [color, setColor] = useState('black');
  const colors = ['black', 'brown'];

  const price = {
    newPrice: '$59.99',
    oldPrice: '$89.99',
  };

  const tabMenu = [
    {linkText: 'Description', component: <Description />},
    {linkText: 'Details', component: <Details />},
  ];

  const [page, setPage] = useState(0);
  const getPage = tabMenu[page] ? tabMenu[page].component : null;

  return (
    <div className="App">
      <div className="col-left">
        <Header
          title="Audio-Technica ATH-MSR7"
          subTitle="2017 Best Headphones of the Year Award Winner"
          tabMenu={tabMenu}
          page={page}
          setPage={setPage}/>

        <Product
          getPage={getPage}
          price={price}
          colors={colors}
          color={color}
          setColor={setColor}/>

        { width < 768 && <Image imagePath={getImagePath(`ath-msr7-${color}`)}/>}

        <Footer />
      </div>
      <div className="col-right">
        { width > 768 && <Image imagePath={getImagePath(`ath-msr7-${color}`)}/>}
      </div>
    </div>
  );
}

export default App;
