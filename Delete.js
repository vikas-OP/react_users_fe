import React from "react";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reRender: this.props.shouldRead,
      data: [],
    };
  }
  deleteUser = async () => {
    let response = await fetch(
      `http://localhost:3000/users/${this.state.name}`,
      {
        method: "DELETE",
      }
    );
    response = await response.json();
    alert(response.message);
    this.props.changeRead();
  };
  componentDidUpdate() {
    this.updateData();
  }
  componentDidMount() {
    this.updateData();
  }
  updateData = async () => {
    let response = await fetch("http://localhost:3000/users");
    response = await response.json();
    response = response.data;
    response = response.map((val) => val.name);
    this.setState({ data: response });
  };
  render() {
    const options = this.state.data.map((val) => (
      <option key={val} value={val}>
        {val}
      </option>
    ));
    return (
      <div className="container-fluid bg-success text-white">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h1>Delete User</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.deleteUser();
            }}
          >
            <label htmlFor="user">Name </label>
            <select
              id="user"
              className="form-control"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            >
              <option value="">--</option>
              {options}
            </select>
            <div className="d-flex justify-content-center my-4">
              <button type="submit" className="btn btn-dark">
                Delete user
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Delete;
