import React, { useState } from "react";
import PercentageSettings from '../PercentageSettings/index';
import ModelSettings from '../ModelSettings/index';
import GeoSettings from '../GeoSettings/index';
import ScheduleSettings from '../ScheduleSettings/index';
import UpgradeStatistics from '../UpgradeStatistics/index';

import PresetGroups from '../PresetGroups/index';
import { getAllProperties, setProperty, deleteProperty } from '../../services/policyHandler';

function MainPanel() {
  const [property, setProperty] = useState({
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
  });

  const onPercentageChange = (evt) => {
    const { value } = evt.target;
    console.log('mainPanel onPercentageChange value: ' + value);
    setProperty((prevState) => ({
      ...prevState,
      coverage: value / 100,
    }));
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

  return (
    <section>
      <div className="square-container">
        <PercentageSettings coverage={coverage * 100} onChange={onPercentageChange} />
        <ModelSettings />
        <GeoSettings />
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
