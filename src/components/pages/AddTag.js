import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "./../../context/StudentContext";
import AddTagForm from "./../forms/AddTagForm";
import TagTable from "./../tables/TagTable";

class AddTag extends Component {
  static contextType = StudentContext;

  render() {
    const { addTag, show, variant, message } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Tag</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddTagForm addTag={addTag} />
          {show && <Alert variant={variant}>{message}</Alert>}
          <TagTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default AddTag;
