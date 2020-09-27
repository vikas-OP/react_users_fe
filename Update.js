import React from "react";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reRender: this.props.shouldRead,
      data: [],
      name: "",
      age: "",
    };
  }

  componentDidMount() {
    this.updateData();
  }
  componentDidUpdate() {
    this.updateData();
  }

  updateUser = async () => {
    if (this.state.age > 80) {
      return alert("Enter valid credentials");
    }
    let data = {
      age: this.state.age,
    };
    let response = await fetch(
      `https://reactusers.herokuapp.com/users/${this.state.name}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    this.setState({ age: "" });
    alert(response.message);
    this.props.changeRead();
  };

  updateData = async () => {
    let response = await fetch("https://reactusers.herokuapp.com/users");
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
      <div className="container-fluid bg-danger text-white">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h1>Update User</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.updateUser();
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
            <br />
            <label htmlFor="age">Age</label>
            <input
              id="age"
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
              className="form-control"
            />
            {this.state.age > 80 && this.state.age !== "" ? (
              <small class="form-text text-dark font-weight-bold">
                Age should not be greater than 80
              </small>
            ) : null}
            <div className="d-flex justify-content-center my-4">
              <button type="submit" className="btn btn-primary">
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Update;
