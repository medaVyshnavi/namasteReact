import React from "react";

class UserClassExtra extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("devru");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>hello there</h1>
      </div>
    );
  }
}

export default UserClassExtra;
