// JS
// const heading = document.createElement("h1");
// heading.textContent = "Hello World";

// const root = document.getElementById("root");

// root.appendChild(heading);

// React
const head = React.createElement(
  "div",
  {},
  [
    React.createElement("h1", {}, "Hello World"),
    React.createElement("h2", {}, "My Name is Lawrence"),
  ],
  [
    React.createElement("h1", {}, "Hello World"),
    React.createElement("h2", {}, "My Name is Lawrence"),
  ]
);

const heading = React.createElement("h1", { id: "Heading" }, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head);
