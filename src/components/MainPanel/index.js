import React, { useState } from "react";
import PercentageSettings from "../PercentageSettings/index";
import ModelSettings from "../ModelSettings/index";
import GeoSettings from "../GeoSettings/index";
import ScheduleSettings from "../ScheduleSettings/index";
import UpgradeStatistics from "../UpgradeStatistics/index";
import { generateProps } from "../../services/policyutils";
import PresetGroups from "../PresetGroups/index";
import {
  getAllProperties,
  setProperty,
  deleteProperty,
} from "../../services/policyHandler";

function MainPanel() {
  const [config, setConfig] = useState({
    sw_version: "126",
    coverage: 1,
    models: ["DCI", "MBOX", "PDS"],
    cities: [
      "Guadalajara",
      "Mexico City",
      "Salamanca",
      "Torreon",
      "Los Mochis",
      "Cancun",
    ],
    not_before: null,
    permitted_hours: {
      start: "02:00:00",
      end: "08:00:00",
    },
  });

  const onPercentageChange = (evt) => {
    const { value } = evt.target;
    console.log("mainPanel onPercentageChange value: " + value);
    setConfig((prevState) => ({
      ...prevState,
      coverage: value / 100,
    }));
  };

  const onCityChange = (selectedCities) => {
    // Fonction appelée lorsqu'une nouvelle ville est sélectionnée dans "ModelSettings"
    console.log("mainPanel onCityChange selectedCities: ", selectedCities);
    setConfig((prevState) => ({
      ...prevState,
      cities: selectedCities,
    }));
    console.log("City in property:", cities);
  };
  const onModelChange = (selectedModels) => {
    console.log("mainPanel onModelChange selectedModels:", selectedModels);
    setConfig((prevState) => ({
      ...prevState,
      models: selectedModels,
    }));
    console.log("Models in property:", models);
  };

  const onNotBeforeChange = () => {};

  const onPermittedHoursChange = () => {};

  const onClick = () => {
    console.log("onClick");
    console.log(config);
    config.tag = Date.now(); // Unix timestamp in milliseconds
    const properties = [];
    properties.push(...generateProps(config));
    console.log(properties);

    try {
      // getAllProperties()
      //  setProperty(properties);
      // deleteProperty(testProp)
      console.log("onClick done");
    } catch (error) {
      console.log("call failed");
    }
  };

  const coverage = config.coverage;
  const cities = config.cities;
  const models = config.models;
  const notBefore = config.not_Before;
  const permittedHours = config.permitted_Hours;

  return (
    <section>
      <div className="square-container">
        <PercentageSettings
          coverage={coverage * 100}
          onChange={onPercentageChange}
        />
        <ModelSettings onModelChange={onModelChange} selectedModels={models} />
        <GeoSettings onCityChange={onCityChange} selectedCities={cities} />
        <ScheduleSettings />
        <UpgradeStatistics />
        <button type="button" className="btn btn-danger" onClick={onClick}>
          Apply SSU Rollout Policy
        </button>
        <PresetGroups />
      </div>
    </section>
  );
}

export default MainPanel;
