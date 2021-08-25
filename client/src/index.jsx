import './assets/styles/index.css';
import 'regenerator-runtime/runtime.js';

import { render } from 'react-dom';
import init from './init.jsx';

const run = async () => {
  const vdom = await init();
  render(vdom, document.getElementById('root'));
};

run();
