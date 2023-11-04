import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
    console.log("in child constructor()");
  }

  async componentDidMount() {
    console.log("in child componentDidMount()");
    const data = await fetch("https://api.github.com/users/medaVyshnavi");
    const res = await data.json();
    console.log(res);
    this.setState({ userData: res });
  }

  componentDidUpdate() {
    console.log("in child componentDidUpdate()");
  }

  // just before the component is removed from the DOM
  componentWillUnmount() {
    console.log("in child componentWillUnmount()");
  }

  render() {
    const { id, login, public_repos, following } = this.state.userData;
    console.log("in child render()");
    return (
      <>
        <div>User Details</div>
        <h2>User Id: {id}</h2>
        <h2>Name: {login}</h2>
        <h3>Public Repos : {public_repos}</h3>
        <h4>Following : {following}</h4>
      </>
    );
  }
}

export default UserClass;
