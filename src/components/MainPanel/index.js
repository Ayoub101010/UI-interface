import React, { useState } from "react";
import PercentageSettings from "../PercentageSettings/index";
import ModelSettings from "../ModelSettings/index";
import GeoSettings from "../GeoSettings/index";
import ScheduleSettings from "../ScheduleSettings/index";
import UpgradeStatistics from "../UpgradeStatistics/index";
import { generateProps } from "../../services/policyutils";
import PresetGroups from "../PresetGroups/index";
import "../MainPanel/MainPanel.css";

import {
  getAllProperties,
  setProperty,
  deleteProperty,
} from "../../services/policyHandler";
import { getCities, getModels } from "../../services/dataUtils";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const initConfig = () => ({
  sw_version: "126",
  coverage: 1,
  models: getModels(),
  cities: getCities(),
  not_before: null,
  permitted_hours: {
    start: "02:00:00",
    end: "08:00:00",
  },
});

function MainPanel() {
  const [config, setConfig] = useState(initConfig);
  const [confirmModalShown, setConfirmModalShown] = useState(false);
  const onPercentageChange = (evt) => {
    const { value } = evt.target;
    setConfig((prevState) => ({
      ...prevState,
      coverage: value / 100,
    }));
  };

  const onCityChange = (selectedCities) => {
    console.log("mainPanel onCityChange selectedCities: ", selectedCities);

    setConfig((prevState) => ({
      ...prevState,
      cities: selectedCities,
    }));
    console.log("City in property:", cities);
  };
  const onModelChange = (selectedModels) => {
    setConfig((prevState) => ({
      ...prevState,
      models: selectedModels,
    }));
    console.log("Models in property:", models);
  };
  const onScheduleChange = (schedule) => {
    setConfig((prevState) => ({
      ...prevState,
      not_before: schedule.not_before,
      permitted_hours: schedule.permitted_hours,
    }));
  };

  const validateConfig = () => {
    console.log("Need to add rules validation here...");
  };

  const onValidate = () => {
    console.log("onValidate");
    console.log(config);

    validateConfig();
    showConfirmModal();
  };

  const coverage = config.coverage;
  const cities = config.cities;
  const models = config.models;
  const closeConfirmModal = (evt) => {
    if (evt && evt.target.name === "ok") {
      config.tag = Date.now(); // Unix timestamp in milliseconds
      const properties = [];
      properties.push(...generateProps(config));
      console.log(properties);
      try {
        // getAllProperties()
        properties.forEach((prop) => {
          setProperty(prop);
        });
        // deleteProperty(testProp)
        console.log("onClick done");
      } catch (error) {
        console.log("call failed");
      }
    }
    setConfirmModalShown(false);
  };
  const showConfirmModal = () => setConfirmModalShown(true);

  return (
    <section>
      <Modal
        className="model"
        show={confirmModalShown}
        onHide={closeConfirmModal}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body> Please Confirm Policy Creation </Modal.Body>
        <Modal.Footer>
          <Button name="cancel" variant="secondary" onClick={closeConfirmModal}>
            Close
          </Button>
          <Button
            name="ok"
            variant="primary"
            className="confirmbutton"
            onClick={closeConfirmModal}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="square-container">
        <PercentageSettings
          coverage={coverage * 100}
          onChange={onPercentageChange}
        />
        <ModelSettings onModelChange={onModelChange} selectedModels={models} />
        <GeoSettings onCityChange={onCityChange} selectedCities={cities} />
        <ScheduleSettings onScheduleChange={onScheduleChange} />
        <UpgradeStatistics />
        <button
          type="button"
          className="validate-btn btn btn-danger"
          onClick={onValidate}
        >
          Apply SSU Rollout Policy
        </button>
        <PresetGroups />
      </div>
    </section>
  );
}
export default MainPanel;
