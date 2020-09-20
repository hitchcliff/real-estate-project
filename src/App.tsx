import React, { ReactElement } from 'react';
import './App.scss';
import { RealEstate } from './components';


function App(): ReactElement<React.FC> {
  return (
    <div className="App">
       <RealEstate/> 
    </div>
  );
}

export default App;
