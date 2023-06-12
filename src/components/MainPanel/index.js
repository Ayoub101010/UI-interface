import React, { useState, useEffect } from "react";
import PercentageSettings from "../PercentageSettings/index";
import ModelSettings from "../ModelSettings/index";
import GeoSettings from "../GeoSettings/index";
import ScheduleSettings from "../ScheduleSettings/index";
import UpgradeStatistics from "../UpgradeStatistics/index";
import { generateProps, savePreset } from "../../services/policyUtils";
import PresetGroups from "../PresetGroups/index";
import "../MainPanel/MainPanel.css";
import Modal from "../Modal/index";
import ModalComponent from "../Modal/index";
import { useLocation } from "react-router-dom";
import { setProperties } from "../../services/policyHandler";

import {
  getModels,
  getSoftwareVersion,
  getNumberOfDevices,
  getAreaIds,
} from "../../services/dataUtils";

const initConfig = () => ({
  sw_version: getSoftwareVersion(),
  coverage: 1,
  models: getModels(),
  areaIds: getAreaIds(),
  not_before: Math.floor(Date.now() / 1000),
  permitted_hours: {
    start: "00:00:00",
    end: "00:00:00",
  },
});

function MainPanel() {
  const [config, setConfig] = useState(initConfig);
  const [confirmModalShown, setConfirmModalShown] = useState(false);
  const [errorModalShown, setErrorModalShown] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const data = location.state;
    if (data) {
      setConfig(data);
    }
  }, []);

  const onPercentageChange = (evt) => {
    const { value } = evt.target;
    setConfig((prevState) => ({
      ...prevState,
      coverage: value / 100,
    }));
  };

  const onCityChange = (selectedAreaIds) => {
    setConfig((prevState) => ({
      ...prevState,
      areaIds: selectedAreaIds,
    }));
  };

  const onModelChange = (selectedModels) => {
    setConfig((prevState) => ({
      ...prevState,
      models: selectedModels,
    }));
  };

  const onSavePreset = async (title) => {
    console.log("save preset");
    const result = await savePreset(title, config)
  };

  const onScheduleChange = (schedule) => {
    console.log("onScheduleChange", schedule);
    setConfig((prevState) => ({
      ...prevState,
      not_before: schedule.not_before,
      permitted_hours: schedule.permitted_hours,
    }));
  };

  const validateConfig = () => {
    const errors = [];

    if (isNaN(config.coverage) || config.coverage < 0 || config.coverage > 1) {
      errors.push(
        "- Invalid coverage percentage. Please enter a value between 0 and 100."
      );
    }

    if (config.areaIds.length === 0) {
      errors.push("- Please select at least one city.");
    }

    if (config.models.length === 0) {
      errors.push("- Please select at least one model.");
    }

    setErrorMessages(errors);
    return errors.length === 0;
  };

  const onConfirm = () => {
    if (validateConfig()) {
      setConfig((prevState) => ({
        ...prevState,
      }));
      showConfirmModal();
    } else {
      setErrorModalShown(true);
    }
  };

  const coverage = config.coverage * 100;
  const areaIds = config.areaIds;
  const models = config.models;
  const targetedDeviceNum = getNumberOfDevices(areaIds, models);
  const closeConfirmModal = (evt) => {
    if (evt && evt.target.name === "ok") {
      config.tag = config.tag ? config.tag : Date.now(); // Unix timestamp in milliseconds
      const properties = generateProps(config);
      console.log(config);
      console.log(properties);
      try {
        setProperties(properties);
        console.log("onClick done");
      } catch (error) {
        console.log("call failed");
        setErrorModalShown(true);
      }
    }
    setConfirmModalShown(false);
  };

  const showConfirmModal = () => setConfirmModalShown(true);

  return (
    <section>
      <Modal
        centered
        show={confirmModalShown}
        onHide={closeConfirmModal}
        onConfirm={closeConfirmModal}
      />
      <ModalComponent
        show={errorModalShown}
        onHide={() => setErrorModalShown(false)}
        errorMessages={errorMessages}
      />
      <div className="square-container">
        <PercentageSettings coverage={coverage} onChange={onPercentageChange} />
        <ModelSettings onModelChange={onModelChange} selectedModels={models} />
        <GeoSettings onCityChange={onCityChange} selectedAreaIds={areaIds} />
        <ScheduleSettings onScheduleChange={onScheduleChange} />
        <UpgradeStatistics targetedDeviceNum={targetedDeviceNum} />

        <button
          type="button"
          className="validate-btn btn btn-danger"
          onClick={onConfirm}
        >
          Apply SSU Rollout Policy
        </button>
        <PresetGroups onSavePreset={onSavePreset} />
      </div>
    </section>
  );
}

export default MainPanel;
