import logo from './logo.svg';
import './App.css';

import "./v2.7.x/MathJax.js?config=TeX-AMS-MML_HTMLorMML&dummy=.js";
import { useEffect } from 'react';
// let MathJax.Ajax['config']['root']
function App() {

  useEffect(() => {
    window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
  },[])

  return (
    <div className="App">
        <div>
          
        </div>
    </div>
  );
}

export default App;
