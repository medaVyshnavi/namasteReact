{
  /* <div id="parent">
  <div id="child">
    <h1>I am an h1 Tag</h1>
  </div>
</div> */
}

import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an h1 tag")
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);

// createElement return an object
// root.render is responsible for converting the object into the actual html element
// and displays it on the browser

const Heading = () => {
  return <h1>hello there</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading());
