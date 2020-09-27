import React from "react";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";

class CRUD extends React.Component {
  constructor() {
    super();
    this.state = {
      read: true,
    };
  }
  updateRead = () => {
    this.setState(({ read }) => {
      return { read: !read };
    });
  };

  render() {
    return (
      <>
        <Create changeRead={this.updateRead} />
        <Read shouldRead={this.state.read} />
        <Update changeRead={this.updateRead} shouldRead={this.state.read} />
        <Delete changeRead={this.updateRead} shouldRead={this.state.read} />
      </>
    );
  }
}

export default CRUD;
