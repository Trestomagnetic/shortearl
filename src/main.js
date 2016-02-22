"use strict";

import React from 'react';
import App from './components/app';

React.render(
  <App foo="abc" bar="123" phrase="Hello Earl" />,
  document.getElementById('rootDiv')
);
