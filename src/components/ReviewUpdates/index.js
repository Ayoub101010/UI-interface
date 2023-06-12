import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./ReviewUpdates.css";
import { deleteProperty, getProperties } from "../../services/policyHandler";
import { getConfigsFromProperties } from "../../services/policyUtils";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getAreaName } from "../../services/dataUtils";

function ReviewUpdates({ onDelete }) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [configs, setConfigs] = useState([]);
  const [props, setProps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const prepareConfigs = async () => {
      try {
        const properties = await getProperties({ ns: "sysdl" });
        setProps(properties);
        const cfgs = getConfigsFromProperties(properties);
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

  const handleDelete = (config) => {
    props.forEach((prop) => {
      if (prop.tag === config.tag) {
        console.log("deleting prop");
        deleteProperty(prop);
      }
    });
    setConfigs(configs.filter((c) => c.tag !== config.tag));
    setProps(props.filter((p) => p.tag !== config.tag));
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
            <th>STB Models</th>
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
              <td>{moment.unix(config.not_before).format("YYYY-MM-DD")}</td>
              <td>{config.sw_version}</td>
              <td>{config.coverage * 100}</td>
              <td>{config.models.join(", ")}</td>
              <td>
                {config.areaIds.length > 0 && (
                  <div className="hover-container">
                    {config.areaIds.length > 0 && (
                      <div className="hover-container">
                        <span>{config.areaIds.length}</span>&nbsp;
                        <a href="#" className="hover-link">
                          (Click to view)
                        </a>
                        {hoverIndex === index && (
                          <div className="hover-box">
                            {config.areaIds.map((areaId, cityIndex) => (
                              <div key={cityIndex}>{getAreaName(areaId)}</div>
                            ))}
                          </div>
                        )}
                      </div>
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
                  onClick={() => handleDelete(config)}
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
