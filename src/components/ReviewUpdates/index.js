import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./ReviewUpdates.css";
import {
  getAllProperties,
  setProperty,
  deleteProperty,
} from "../../services/policyHandler";

function ReviewUpdates() {
  const getProps = async () => {
    console.log("Calling getAllProporties");
    // Appeler votre fonction generateProps pour obtenir les propriétés du backend
    const fetchedProperties = await getAllProperties();

    // const configs = generateConfigs(fetchedProperties)
    console.log(fetchedProperties);
    // Appeler la fonction pour récupérer les propriétés du backend au chargement du composant
  };
  const props = [];
  const grouped = Object.values(
    props.reduce((result, entry) => {
      const key = entry.tag;
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(entry);
      return result;
    }, {})
  );
  console.log(grouped);
  const [tableData, setTableData] = useState([
    {
      date: "12/08/2024",
      version: 136,
      percentage: 50,
      Models: "MBOX",
      cities: "Salamanca",
    },
    {
      date: "02/03/2025",
      version: 136,
      percentage: 50,
      Models: "PDS",
      cities: "Guadalajara",
    },
  ]);
  useEffect(() => {
    getProps();
    const sortedData = [...tableData].map((row) =>
      Object.fromEntries(Object.entries(row).sort())
    );
    setTableData(sortedData);
  }, [tableData]);
  const tableHeaders = Object.keys(tableData[0]);

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
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
            {/* // <th>Dates</th>
            // <th>Version</th>
            // <th>Devices / %</th>
            // <th>STD Models</th>
            // <th>Cities</th> */}
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody className="Tbody">
          {tableData.map((row, index) => (
            <tr key={index}>
              {tableHeaders.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
          {/* <tr>
            <td>2023-05-28</td>
            <td>Release 1.3.6</td>
            <td>80%</td>
            <td>MBOXH4</td>
            <td>
              Salamanca <a href="#"> (view)</a>
            </td>
            <td> */}
          {/* <Button className="btnA" variant="primary">
            Edit
          </Button>
          <Button className="btnB" variant="danger">
            Delete
          </Button> */}
          {/* </td>
          </tr>
          <tr>
            <td>2023-05-29</td>
            <td>Release 1.3.6</td>
            <td>90%</td>
            <td>PDS2140</td>
            <td>
              Mexico <a href="#"> (view)</a>
            </td>
            <td>
              <Button className="btnA" variant="primary">
                Edit
              </Button>
              <Button className="btnB" variant="danger">
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>2023-05-30</td>
            <td>Release 1.3.6</td>
            <td>75%</td>
            <td>747MEG</td>
            <td>
              Mexico <a href="#"> (view)</a>
            </td>
            <td>
              <Button className="btnA" variant="primary">
                Edit
              </Button>
              <Button className="btnB" variant="danger">
                Delete
              </Button>
            </td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
}

export default ReviewUpdates;
