import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'


import Header from './components/header';
import Body from './components/body';
import SquareContainer from './components/SquareContainer';
import Button from './components/Button';



const App = () => (
    <div className="hey">
        <Header/>
        <Body/>
        <SquareContainer/>
        
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
