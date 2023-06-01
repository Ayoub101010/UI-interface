import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./ReviewUpdates.css";

function ReviewUpdates() {
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
          <tr>
            <td>2023-05-28</td>
            <td>Release 1.3.6</td>
            <td>80%</td>
            <td>MBOXH4</td>
            <td>
              Salamanca <a href="#"> (view)</a>
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
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ReviewUpdates;
