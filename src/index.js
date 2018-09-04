// import Parser from 'html-react-parser';
// console.log(Parser);
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
	<div>{title}</div>,
	document.getElementById('app')
);

module.hot.accept();