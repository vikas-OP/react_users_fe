import React from "react";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  deleteUser = async () => {
    let response = await fetch(
      `https://reactusers.herokuapp.com/users/${this.state.name}`,
      {
        method: "DELETE",
      }
    );
    response = await response.json();
    alert(response.message);
    this.props.changeRead();
  };
  render() {
    const options = this.props.data.map((val) => (
      <option key={val.name} value={val.name}>
        {val.name}
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
