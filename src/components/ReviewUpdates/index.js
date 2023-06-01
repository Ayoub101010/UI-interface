import React, { useState ,useEffect} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./ReviewUpdates.css";
import {getAllProperties} from "../../services/policyHandler";

function ReviewUpdates({ properties, onDelete }) {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleHover = (index) => {
    setHoverIndex(index);
  };

  const handleDelete = (index) => {
    onDelete(index);
  };
  useEffect(async () => {
    try {
      console.log("Calling getAllProporties");
      // Appeler votre fonction generateProps pour obtenir les propriétés du backend
      const fetchedProperties = await getAllProperties();
      
      const configs = generateConfigs(fetchedProperties)
      console.log(fetchedProperties);
    } catch (error) {
      console.error("Une erreur", error);
    }
  // Appeler la fonction pour récupérer les propriétés du backend au chargement du composant
});
  

  return (
    <div>
      <h2 className="RSU">Review Scheduled Updates</h2>
      <br></br>
      <Table striped bordered hover className="Tbl">
        <thead className="Thead">
          <tr>
            <th colSpan="6">Phased SSU Rollout</th>
          </tr>
          <tr>
            <th>Dates</th>
            <th>Version</th>
            <th>Devices / %</th>
            <th>STD Models</th>
            <th>Cities</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="Tbody">

          {properties.map((property, index) => (
            <tr
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(-1)}
            >
              <td>{property.date}</td>
              <td>{property.version}</td>
              <td>{property.devices}</td>
              <td>{property.models}</td>
              <td>
                {property.cities.length > 0 && (
                  <div className="hover-container">
                    <span>{property.totalCities}</span>&nbsp;
                    <a href="#" className="hover-link">
                      (Click to view)
                    </a>
                    {hoverIndex === index && (
                      <div className="hover-box">{property.cities}</div>
                    )}
                  </div>
                )}
              </td>
              <td>
                <Button className="btnA" variant="primary">
                  Edit
                </Button>
                <Button
                  className="btnB"
                  variant="danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>
    </div>
  );
}

export default ReviewUpdates;
