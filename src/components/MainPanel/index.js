import React, { useState } from "react";
import PercentageSettings from '../PercentageSettings/index';
import ModelSettings from '../ModelSettings/index';
import GeoSettings from '../GeoSettings/index';
import ScheduleSettings from '../ScheduleSettings/index';
import UpgradeStatistics from '../UpgradeStatistics/index';

import PresetGroups from '../PresetGroups/index';
import { getAllProperties, setProperty, deleteProperty } from '../../services/policyHandler';

function MainPanel() {
  const [property, settoto] = useState({
    coverage: 1,
    coverage_seed: 0,
    filter: {
      group: {
        group1: '1',
      },
    },
    key: 'Test::Enable',
    ns: 'ada',
    value: '2',
    city: [],
    model: [],
  });

  const onPercentageChange = (evt) => {
    const { value } = evt.target;
    console.log('mainPanel onPercentageChange value: ' + value);
    settoto((prevState) => ({
      ...prevState,
      coverage: value / 100,
    }));
  };

  const onCityChange = (selectedCity) => { // Fonction appelée lorsqu'une nouvelle ville est sélectionnée dans "ModelSettings"
    console.log('mainPanel onCityChange selectedCity: ' + selectedCity);
    settoto((prevState) => ({
      ...prevState,
      city: selectedCity,

    }));
    console.log('City in property:', city);
  };
  const onModelChange = (selectedModels) => {
    console.log('mainPanel onModelChange selectedModels:', selectedModels);
    settoto((prevState) => ({
      ...prevState,
      model: selectedModels,
    }));
    console.log('Models in property:', property.model);
  };

  const onClick = () => {
    console.log('onClick');
    console.log(property);

    try {
      // getAllProperties()
      setProperty(property);
      // deleteProperty(testProp)
      console.log('onClick done');
    } catch (error) {
      console.log('call failed');
    }
  };

  const coverage = property.coverage;
  const city = property.city;
  const model = property.model;

  return (
    <section>
      <div className="square-container">
        <PercentageSettings coverage={coverage * 100} onChange={onPercentageChange} />
        <ModelSettings onModelChange={onModelChange} selectedModels={model}  /> 
        <GeoSettings onCityChange={onCityChange} selectedCity={city}  />{/* Passage de la fonction de rappel onCityChange à GeoSettings */}
        <ScheduleSettings />
        <UpgradeStatistics />
        <button type='button' className='btn btn-danger' onClick={onClick}>
          Apply SSU Rollout Policy
        </button>
        <PresetGroups />
      </div>
    </section>
  );
}

export default MainPanel;
