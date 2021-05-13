import React, { useState } from 'react';
import GetWindowSize from './helpers/getWindowSize.js';

import Header from './components/Header';
import Description from './components/Description';
import Details from './components/Details';
import Image from './components/Image';
import Footer from './components/Footer';

const App = () => {
  const [width] = GetWindowSize();
  const [color, setColor] = useState('black');

  const tabMenu = [
    {linkText: 'Description', component: <Description />},
    {linkText: 'Details', component: <Details />},
  ];

  const [page, setPage] = useState(0);
  const getPage = tabMenu[page] ? tabMenu[page].component : null;

  return (
    <div className="App">
      <div className="col-left">
        <Header tabMenu={tabMenu} page={page} setPage={setPage}/>
        
        <div>{getPage}</div>

        { width < 768 && <Image color={color}/>}

        <Footer color={color} setColor={setColor}/>
      </div>
      <div className="col-right">
        { width > 768 && <Image color={color}/>}
      </div>
    </div>
  );
}

export default App;
