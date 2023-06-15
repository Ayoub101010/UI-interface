import React, { useEffect } from "react";
import "./Body.css";
import { getSoftwareVersion } from "../../services/dataUtils";
import MainPanel from "../MainPanel";
import { loadPresets } from "../../services/policyUtils";
import { useState } from "react";

function Body() {
  const [presetList, setPresetList] = useState([]);
  const [selectedPreset, setSelectedPreset] = useState({});

  useEffect(() => {
    const load = async () => {
      const presets = await loadPresets();
      console.log(presets);
      setPresetList(presets);
    };
    load();
  }, []);

 const onSelectPresetChange = (evt) => {
  console.log('preset', evt.target.value);
  const result = presetList.filter((p)=> p.key === evt.target.value)
  if (result && result.length > 0) {
    setSelectedPreset(result[0])
  }

 }
  return (
    <>
      <section>
        <h2>Phased SSU Rollout</h2>
        <br></br>
        <div style={{ display: "flex" }}>
          <p id="Dep-Rel">Deploying Release :</p>
          <input
            type="text"
            id="Version"
            value={getSoftwareVersion()}
            style={{ fontWeight: "bold" }}
          />
          <select className="Group" onChange={onSelectPresetChange}>
            <React.Fragment key="">
                <option value="">
                Use existing preset group
                </option>
              </React.Fragment>
            {presetList.map((preset) => (
              <React.Fragment key={preset.key}>
                <option value={preset.key}>
                {preset.key}
                </option>
              </React.Fragment>
            ))}
          </select>{" "}
        </div>
      </section>
      <MainPanel preset={selectedPreset}></MainPanel>
    </>
  );
}

export default Body;
