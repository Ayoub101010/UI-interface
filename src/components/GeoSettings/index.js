import React from "react";

function GeoSettings({ selectedCity, onCityChange }) {
  const cities = [
    { name: "Guadalajara", id: "city1" },
    { name: "Mexico City", id: "city2" },
    { name: "Salamanca", id: "city3" },
    { name: "Torreon", id: "city4" },
    { name: "Los Mochis", id: "city5" },
    { name: "Cancun", id: "city6" }
  ];

  const handleCityChange = (event) => {
    const cityName = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      onCityChange([...selectedCity, cityName]);
    } else {
      const updatedCities = selectedCity.filter((city) => city !== cityName);
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
            <React.Fragment key={city.id}>
              <div className="form-check">
                &nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={city.id}
                  name={city.name}
                  checked={selectedCity.includes(city.name)}
                  onChange={handleCityChange}
                />
                <label className="form-check-label square-checkbox" htmlFor={city.id}>
                  {city.name}
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
