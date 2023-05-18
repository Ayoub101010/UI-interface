import React from 'react';
import ReactDOM from 'react-dom/client';

import "./components/MainPanel/MainPanel.css";
import "./components/PercentageSettings/PercentageSettings.css";
import "./components/ModelSettings/ModelSettings.css";
import "./components/GeoSettings/GeoSettings.css";
import "./components/NavBar/NavBar.css";
import "./components/Body/Body.css";
import "./components/ScheduleSettings/ScheduleSettings.css";
import "./components/UpgradeStatistics/UpgradeStatistics.css";
import "./components/PresetGroups/PresetGroups.css";


import Body from './components/Body/body';
import MainPanel from './components/MainPanel/index';
import NavBar from './components/NavBar/NavBar';


const App = () => (
    <div>
        <NavBar/>
        <Body/>
        <MainPanel/>
        
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
