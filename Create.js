import React from "react";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
    };
  }

  createUser = async () => {
    if (this.state.name.length < 3 || this.state.age > 80) {
      return alert("Enter valid credentials");
    }
    let data = {
      name: this.state.name,
      age: this.state.age,
    };
    let response = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    this.setState({ name: "", age: "" });
    alert(response.message);
    this.props.changeRead();
  };

  render() {
    return (
      <div className="container-fluid bg-primary text-white">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.createUser();
            }}
          >
            <h1>Create User</h1>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            {this.state.name.length < 3 && this.state.name !== "" ? (
              <small class="form-text text-dark font-weight-bold">
                Name should atleast be 3 characters.
              </small>
            ) : null}
            <br />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              className="form-control"
              value={this.state.age}
              onChange={(e) => this.setState({ age: parseInt(e.target.value) })}
            />
            {this.state.age > 80 && this.state.age !== null ? (
              <small class="form-text text-dark font-weight-bold">
                Age should not be greater than 80
              </small>
            ) : null}
            <div className="d-flex justify-content-center my-4">
              <button type="submit" className="btn btn-dark">
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;
