{
  /* <div id="parent">
  <div id="child">
    <h1>I am an h1 Tag</h1>
  </div>
</div> */
}

const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// createElement return an object
// root.render is responsible for converting the object into the actual html element
// and displays it on the browser
