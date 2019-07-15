import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import Root from './Root';

axios.defaults.baseURL = '';

render(<Root />, document.querySelector('.root'));
