import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import { render } from 'react-dom';

render(
	Parser('<h1>single</h1>'),
	document.getElementById('root')
);