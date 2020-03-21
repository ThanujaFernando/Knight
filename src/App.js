import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  FaChessKnight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';

import Square from './components/Square';

const generateGrid = () => {
  return (
    <Square gridIndex="22"/>
  );
};


function App() {
  return (
    <div className="content-center">
    <table className="table-matrix" border="1" cellSpacing="0">
      <thead></thead>
      <tbody>
        <tr>
          {generateGrid()}
        </tr>
      </tbody>
    </table>
    </div>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



  );
}

export default App;
