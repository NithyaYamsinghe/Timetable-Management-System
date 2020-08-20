import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UpdateSubGroupForm from "./../forms/UpdateSubGroupForm";
import SubGroupTable from "./../tables/SubGroupTable";
import { StudentContext } from "./../../context/StudentContext";

class UpdateSubGroup extends Component {
  static contextType = StudentContext;

  render() {
    const {
      updateSubGroup,
      show,
      variant,
      message,
      filteredSubGroup,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Update Sub Group</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateSubGroupForm
            updateSubGroup={updateSubGroup}
            filteredSubGroup={filteredSubGroup}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <SubGroupTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateSubGroup;
