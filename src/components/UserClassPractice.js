import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 2,
      location: this.props.location,
      handle: "insta",
    };
  }

  changeHandle = () => {
    this.setState({ handle: "linkedln" });
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count, location, handle } = this.state;
    return (
      <div>
        <div>User Details</div>
        <p>{count}</p>
        <button onClick={this.handleIncrement}>increment</button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location : {location}</h3>
        <h4>{handle} : vyshnavi.venkatesh</h4>
        <button onClick={this.changeHandle}>ChangeHandle</button>
      </div>
    );
  }
}

export default UserClass;
