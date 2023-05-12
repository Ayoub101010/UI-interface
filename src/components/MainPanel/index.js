import React from "react";
import PercentageSettings from '../PercentageSettings/index';
import ModelSettings from '../ModelSettings/index';
import GeoSettings from '../GeoSettings/index';
import ScheduleSettings from '../ScheduleSettings/index';
import UpgradeStatistics from '../UpgradeStatistics/index';
import Button from '../Buttons/Button';
import PresetGroups from '../PresetGroups/index';

function MainPanel() {
  return (
    <section>
      <div className="square-container">
        <PercentageSettings />
        <ModelSettings />
        <GeoSettings />
        <ScheduleSettings />
        <UpgradeStatistics />
        <Button />
        <PresetGroups />
      </div>
    </section>
  );
}

export default MainPanel;
