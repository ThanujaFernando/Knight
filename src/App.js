import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  FaChessKnight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';


function App() {
  return (

    <div className="content-center">
    <table className="table-matrix" border="1" cellspacing="0">
      <tr>
        <td className="td"><FaChessKnight size="30" /></td>
        <td className="td"></td>
        <td className="td"><FaRegCircle size="30" /></td>
        <td className="td"></td>
      </tr>
      <tr>
        <td className="td">1</td>
        <td className="td"><FaCircle size="30" /></td>
        <td className="td"></td>
        <td className="td"></td>
      </tr>
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
