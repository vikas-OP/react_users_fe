import React from "react";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";

class CRUD extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.updateRead();
  }

  updateRead = async () => {
    let response = await fetch("https://reactusers.herokuapp.com/users");
    response = await response.json();
    response = response.data;
    console.log(response);
    this.setState({ data: response });
    console.log(this.state.data);
  };
  render() {
    return (
      <>
        <Create changeRead={this.updateRead} />
        <Read data={this.state.data} />
        <Update changeRead={this.updateRead} data={this.state.data} />
        <Delete changeRead={this.updateRead} data={this.state.data} />
      </>
    );
  }
}

export default CRUD;
