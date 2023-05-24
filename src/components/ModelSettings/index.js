import React from "react";

function ModelSettings({ onModelChange, selectedModels }) {
  const handleModelChange = (event) => {
    const modelName = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      onModelChange([...selectedModels, modelName]);
    } else {
      const updatedModels = selectedModels.filter((model) => model !== modelName);
      onModelChange(updatedModels);
    }
  };

  const models = [
    { name: "Technicolor DCI", id: "model1" },
    { name: "Skyworth MBOX", id: "model2" },
    { name: "Cisco PDS", id: "model3" },
  ];

  return (
    <section>
      <div className="square">
        <div className="rect">Included STB Models</div>
        <br />
        {models.map((model, index) => (
          <React.Fragment key={model.id}>
            <div className="form-check">
              &nbsp;&nbsp;
              <input
                type="checkbox"
                className="form-check-input"
                id={model.id}
                name={model.name}
                checked={selectedModels.includes(model.name)}
                onChange={handleModelChange}
              />
              <label className="form-check-label" htmlFor={model.id}>
                {model.name}
              </label>
            </div>
            {index < models.length - 1 && <br />} {/* Ajoute un saut de ligne entre chaque modèle*/}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default ModelSettings;

