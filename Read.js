import React from "react";

class Read extends React.Component {
  render() {
    const trs = this.props.data.map((val, index) => {
      return (
        <tr key={index}>
          <td>{val.name}</td>
          <td>{val.age}</td>
        </tr>
      );
    });
    return (
      <div className="container-fluid bg-warning text-dark">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h1>All Users</h1>
          <table className="table table-dark text-center">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>{trs}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Read;
