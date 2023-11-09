import React from "react";
import UserClass from "./UserClass";
import UserClassExtra from "./UserClassExtra";
import UserDetails from "../utils/userContext";

class About extends React.Component {
  constructor() {
    super();
    console.log("in parent constructor()");
  }

  // componentDidMount() {
  //   console.log("parent componentDidMount");
  // }

  // componentDidUpdate() {
  //   console.log("in parent componentDidUpdate()");
  // }
  render() {
    console.log("in parent render()");
    return (
      <>
        <div>About Us</div>
        <UserClass />
        <UserDetails.Consumer>
          {({ loggedInUser }) => <div>{loggedInUser}</div>}
        </UserDetails.Consumer>
        {/* <UserClassExtra /> */}
      </>
    );
  }
}

export default About;

// import User from "./User";
// import UserClass from "./UserClassPractice";

// const About = () => {
//   return (
//     <>
//       <div>About Us</div>
//       <UserClass name={"Vyshnavi Venkatesh"} location="Tokyo" />

//       {/* <User name={"Meda Vyshnavi"} /> */}
//       {/* <UserClass name={"Vyshnavi Venkatesh"} location="Tokyo" /> */}
//       {/* <UserClass name={"Vyshnavi Venkatesh"} location="Tokyo" /> */}
//     </>
//   );
// };

// export default About;

// order of execution
// constructor => render() => componentDidMount

/** if there are multiple children then  */
// ----------------------start of render phase-------------
// parent constructor
// parent render
// child 1 constructor
// child 1 render
// child 2 constructor
// child 2 render
// -----------------------end of render phase----------------
// ----------------------start of commit phase-------------
// child 1 componentDidMount
// child 2 componentDidMount
// parent componentDidMount
// -----------------------end of commit phase----------------

// batching the phases is the way react optimises the process
//render of multiple children are batched (virtual dom)
// commit of multiple children are batched (actual dom)
