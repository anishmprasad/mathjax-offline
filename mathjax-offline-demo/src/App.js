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
  function preprocessFbBody(questionText) {
    const blanks = [];
    const preprocesedText = questionText.replace(/__+/g, function (match) {
        blanks.push(match);
        return `<span id='fb-blank-${blanks.length - 1}'><input type="text"></input></span>`;
    });
    return {
        processedText: preprocesedText || "",
        blanks: blanks,
        totalBlanks: blanks.length,
    };
}
  const text = `If <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>90</mn><mo>&#176;</mo></math>, then fill up the blank&nbsp;with a suitable trigonometric ratio of the complementary angle.</p>\n\n<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>cot</mi><mi>A</mi><mo>=</mo></math>_____.</p>`
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
          <b>normal with underscore</b>
          <p>If <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>90</mn><mo>&#176;</mo></math>, then fill up the blank&nbsp;with a suitable trigonometric ratio of the complementary angle.</p><p><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>cot</mi><mi>A</mi><mo>=</mo></math>_____.</p>
        </div>

        <b>with injected span</b>
        <div dangerouslySetInnerHTML={{ __html: preprocessFbBody(text).processedText }} />


        <div>
          <b>Table</b><br/>
          <math>
            <mtable columnalign='left'>
              <mtr>
                <mtd>
                  <mo>&int;</mo>
                  <msup>
                    <mi>e</mi>
                    <mi>x</mi>
                  </msup>
                  <mi>dx</mi>
                </mtd>
                <mtd>
                  <mo>=</mo>
                </mtd>
                <mtd>
                  <msup>
                    <mi>e</mi>
                    <mi>x</mi>
                  </msup>
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <mo>&int;</mo>
                  <msup>
                    <mi>a</mi>
                    <mi>x</mi>
                  </msup>
                  <mi>dx</mi>
                </mtd>
                <mtd>
                  <mo>=</mo>
                </mtd>
                <mtd>
                  <mfrac>
                    <msup>
                      <mi>a</mi>
                      <mi>x</mi>
                    </msup>
                    <mrow>
                      <mi>ln</mi>
                      <mi>a</mi>
                    </mrow>
                  </mfrac>
                </mtd>
              </mtr>
            </mtable>
          </math>
        </div>



        <div>
          <b>Matrix</b><br/>
          <math>
            <mi>E</mi>
            <mo>=</mo>
            <mtable>
              <mtr>
                <mtd>
                  <mn>1</mn>
                </mtd>
                <mtd>
                  <mn>0</mn>
                </mtd>
                <mtd>
                  <mn>0</mn>
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <mn>0</mn>
                </mtd>
                <mtd>
                  <mn>1</mn>
                </mtd>
                <mtd>
                  <mn>0</mn>
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <mn>0</mn>
                </mtd>
                <mtd>
                  <mn>0</mn>
                </mtd>
                <mtd>
                  <mn>1</mn>
                </mtd>
              </mtr>
            </mtable>
          </math>
        </div>




        <div>
          <b>Determinant</b><br />
          <math>
            <mi>det A</mi>
            <mo>=</mo>
            <mfenced open='|' close='|'>
            <mtable>
              <mtr>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mn>1</mn>
                      <mn>1</mn>
                    </mrow>
                  </msub>
                </mtd>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mn>1</mn>
                      <mn>2</mn>
                    </mrow>
                  </msub>
                </mtd>
                <mtd><mi>&#x2026;</mi>
                </mtd>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mn>1</mn>
                      <mi>n</mi>
                    </mrow>
                  </msub>
                </mtd>
              </mtr>
              <mtr>
                <mtd></mtd>
                <mtd><mi>&#x22ee;</mi>
                </mtd>
              </mtr>
              <mtr mathcolor='#00cc00'>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>j</mi>
                      <mn>1</mn>
                    </mrow>
                  </msub>
                </mtd>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>j</mi>
                      <mn>2</mn>
                    </mrow>
                  </msub>
                </mtd>
                <mtd><mi>&#x2026;</mi>
                </mtd>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>j</mi>
                      <mi>n</mi>
                    </mrow>
                  </msub>
                </mtd>
              </mtr>
              <mtr>
                <mtd></mtd>
                <mtd><mi>&#x22ee;</mi>
                </mtd>
              </mtr>
              <mtr mathcolor='#0000cc'>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>k</mi>
                      <mn>1</mn>
                    </mrow>
                  </msub>
                </mtd>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>k</mi>
                      <mn>2</mn>
                    </mrow>
                  </msub>
                </mtd>
                <mtd><mi>&#x2026;</mi>
                </mtd>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>k</mi>
                      <mi>n</mi>
                    </mrow>
                  </msub>
                </mtd>
              </mtr>
              <mtr>
                <mtd></mtd>
                <mtd><mi>&#x22ee;</mi>
                </mtd>
              </mtr>
              <mtr>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>n</mi>
                      <mn>1</mn>
                    </mrow>
                  </msub>
                </mtd>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>n</mi>
                      <mn>2</mn>
                    </mrow>
                  </msub>
                </mtd>
                <mtd><mi>&#x2026;</mi>
                </mtd>
                <mtd>
                  <msub>
                    <mi>a</mi>
                    <mrow>
                      <mi>n</mi>
                      <mi>n</mi>
                    </mrow>
                  </msub>
                </mtd>
              </mtr>
            </mtable>
            </mfenced>
          </math>
        </div>





        <div id="Vector">
          <b>Vector</b><br/>
          <math>
            <mover>
              <mi>v</mi>
              <mo>&rarr;</mo>
            </mover>
            <mo>=</mo>
            <mfenced>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
              <msub>
                <mi>v</mi>
                <mn>3</mn>
              </msub>
            </mfenced>
          </math>
        </div>



        <div id="Indentation">
          <b>Indentation</b> <br/>
          <math>
            <mrow>
              <msup><mi>x</mi><mn>2</mn>
              </msup>
              <mo>-</mo>
              <mn>9</mn>
            </mrow>
            <mo>=</mo>
            <mrow>
              <msup><mi>x</mi><mn>2</mn>
              </msup>
              <mo>-</mo>
              <msup><mn>3</mn><mn>2</mn>
              </msup>
            </mrow>
            <mo linebreak='newline'
                linebreakstyle='before'
                indentshift='2.6em'>=</mo>
            <mrow>
              <mfenced separators=''>
                <mi>x</mi><mo>-</mo>
                <mn>3</mn>
              </mfenced>
              <mo>&InvisibleTimes;</mo>
              <mfenced separators=''>
                <mi>x</mi><mo>+</mo>
                <mn>3</mn>
              </mfenced>
            </mrow>
          </math>
        </div>


        <div id="style">
          <b>Style</b><br></br>
          <math mathsize='1.5em'>
          <mrow>
            <msup>
              <mi mathvariant='bold'>
              x</mi>
              <mn mathvariant='italic'>
              2</mn>
            </msup>
            <mo>-</mo>
            <mn>9</mn>
          </mrow>
          <mo>=</mo>
          <mrow>
            <msup>
              <mi>x</mi>
              <mn>2</mn>
            </msup>
            <mo>-</mo>
            <msup mathsize='2em'>
              <mn>3</mn><
              mn>2</mn>
            </msup>
          </mrow>
          <mo linebreak='newline'
              linebreakstyle='before'
              indentshift='0.6em'>=</mo>
              <mspace width='.1em' />
          <mrow mathcolor='#cc0000'>
            <mfenced separators=''>
              <mi>x</mi>
              <mo>-</mo>
              <mn>3</mn>
            </mfenced>
            <mo>&InvisibleTimes;</mo>
            <mfenced separators=''>
              <mstyle mathcolor='#0000cc' 
                        mathsize='.7em'>
                <mi>x</mi>
                <mo>+</mo>
                <mn>3</mn>
              </mstyle>
            </mfenced>
          </mrow>
        </math>
        </div>
    </div>
  );
}

export default App;



// # https://elsenaju.eu/mathml/MathML-Examples.htm