import React, { useState } from 'react';

import Header from './components/Header';
import Description from './components/Description';
import Details from './components/Details';

const App = () => {

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
       
      </div>
      <div className="col-right">
      </div>
    </div>
  );
}

export default App;
