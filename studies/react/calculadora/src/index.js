import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculator from './main/Calculator'
import registerServiceWorker from './registerServiceWorker';

//<button class='btn btn-primary'>Butistrépi</button> 

ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>

    , document.getElementById('root'));
registerServiceWorker();
