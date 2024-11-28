import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesAction = ({ deleteData, ViewData }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button className="btn-style p-2" onClick={deleteData}>
          Delete All
        </button>
        <button className="btn-style p-2" onClick={ViewData}>
          Show Dates
        </button>
      </Col>
    </Row>
  );
};

export default DatesAction;
