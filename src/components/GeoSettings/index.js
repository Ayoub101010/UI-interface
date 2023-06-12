import React from "react";
import "./GeoSettings.css";
import { getCities } from "../../services/dataUtils";

function GeoSettings({ selectedAreaIds, onCityChange }) {
  const cities = getCities();
  const handleCityChange = (event) => {
    const selectedAreaId = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      onCityChange([...selectedAreaIds, selectedAreaId]);
    } else {
      const updatedCities = selectedAreaIds.filter(
        (areaId) => areaId !== selectedAreaId
      );
      onCityChange(updatedCities);
    }
  };

  return (
    <section>
      <div className="square">
        <div className="rect">Included Cities</div>
        <br />
        <div className="square-wrapper">
          {cities.map((city, index) => (
            <React.Fragment key={city.user_area_id}>
              <div className="form-check">
                &nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={city.user_area_id}
                  name={city.user_area_id}
                  checked={selectedAreaIds.includes(city.user_area_id)}
                  onChange={handleCityChange}
                />
                <label
                  className="form-check-label square-checkbox"
                  htmlFor={city.user_area_id}
                >
                  {city.city}
                </label>
              </div>
              {index !== cities.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GeoSettings;
