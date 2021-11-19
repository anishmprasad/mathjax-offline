/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React from 'react'

import "./v2.7.x/MathJax.js?config=TeX-AMS-MML_HTMLorMML&dummy=.js";
// import(/* webpackChunkName: "mathjax" */ './v2.7.x/MathJax.js?config=TeX-AMS-MML_HTMLorMML&dummy=.js');
import { useEffect } from 'react';
// let MathJax.Ajax['config']['root']
function App() {

  // useEffect(() => {
  //   window?.MathJax?.Hub?.Queue(['Typeset', window.MathJax.Hub]);
  // },[])

  useEffect(() => {
    window?.MathJax?.Hub?.Queue(['Typeset', window.MathJax.Hub]);
  });

  return (
    <div className="App">
        <div>
          <math xmlns = "http://www.w3.org/1998/Math/MathML">
              <mrow>
                <msup><mi>a</mi><mn>2</mn></msup>
                <mo>+</mo>
                <msup><mi>b</mi><mn>2</mn></msup>
                <mo> = </mo>
                <msup><mi>c</mi><mn>2</mn></msup>
              </mrow>
          </math>
        </div>



        <div>
        <p>If <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>90</mn><mo>&#176;</mo></math>, then fill up the blank&nbsp;with a suitable trigonometric ratio of the complementary angle.</p>\n\n<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>cot</mi><mi>A</mi><mo>=</mo></math>_____.</p>
        </div>
    </div>
  );
}

export default App;
