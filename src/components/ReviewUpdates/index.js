import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./ReviewUpdates.css";
import { getAllProperties } from "../../services/policyHandler";
import { getConfigsFromProperties } from "../../services/policyUtils";
import { useNavigate } from "react-router-dom";

function ReviewUpdates({ onDelete }) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  // const [configs, setConfigs] = useState([({
  //   sw_version: "126",
  //   coverage: 1,
  //   models: ["PDS","MBOX"],
  //   cities: ["Salamanca"],
  //   not_before: null,
  //   permitted_hours: {
  //     start: "00:00:00",
  //     end: "00:00:00",
  //   },
  // })]);
  const navigate = useNavigate();

  useEffect(() => {
    const prepareConfigs = async () => {
      console.log("jdnhdjn");
      try {
        const props = await getAllProperties({ ns: "sysdl" });

        const cfgs = getConfigsFromProperties(props);
        console.log(cfgs);
        setConfigs(cfgs);
      } catch (error) {
        console.log("failed to retried props");
      }
    };
    prepareConfigs();
  }, []);

  const handleHover = (index) => {
    setHoverIndex(index);
  };

  const handleDelete = (index) => {
    onDelete(index);
  };
  const handleClick = (config) => {
    navigate("/ux", { state: config });
  };

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
          {configs.map((config, index) => (
            <tr
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(-1)}
            >
              <td>{new Date(config.not_before * 1000).toLocaleString()}</td>
              <td>{config.sw_version}</td>
              <td>{config.coverage}</td>
              <td>{config.models}</td>
              <td>
                {config.cities.length > 0 && (
                  <div className="hover-container">
                    <span>{config.cities.length}</span>&nbsp;
                    <a href="#" className="hover-link">
                      (Click to view)
                    </a>
                    {hoverIndex === index && (
                      <div className="hover-box">{config.cities}</div>
                    )}
                  </div>
                )}
              </td>
              <td>
                <Button
                  className="btnA"
                  variant="primary"
                  onClick={() => handleClick(config)}
                >
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
