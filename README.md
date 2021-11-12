# mathjax-offline

A Mathjax Port for self hosted system

# Usage

```jsx
import "mathjax-offline/v2.7.x/MathJax.js?config=TeX-AMS-MML_HTMLorMML&dummy=.js";


// Config

window.MathJax = {
	skipStartupTypeset: true,
	messageStyle: 'none',
	showMathMenu: true,
	//jax: ['input/TeX', 'input/MathML', 'output/CommonHTML'],
	extensions: ['tex2jax.js', 'mml2jax.js', 'MathMenu.js', 'MathZoom.js'],
	TeX: {
		extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js'],
	},
	tex2jax: {
		preview: 'none',
		inlineMath: [
			['$', '$'],
			['\\(', '\\)'],
		],
	},
	jax: ['input/TeX', 'input/MathML', 'output/SVG'],
	SVG: {
		fontCache: 'global',
		scale: 100,
		undefinedFamily: "STIXGeneral, 'Arial Unicode MS', serif",
		font: 'STIX-Web',
		mtextFontInherit: true,
		matchFontHeight: true,
	},
	root: getRootPath(),
	AuthorInit: function () {
		window.MathJax.Hub.Register.MessageHook('Math Processing Error', function (message) {
			//  do something with the error.  message[2] is the Error object that records the problem.
			console.log('Math Processing Error', message);
		});
	},
};

function getRootPath() {
	return ''
}
```

# Licence

MIT
