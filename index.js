let reactDiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from inner h1"),
    React.createElement("h2", {}, "Hello from inner h2"),
  ])
);
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(reactDiv);
