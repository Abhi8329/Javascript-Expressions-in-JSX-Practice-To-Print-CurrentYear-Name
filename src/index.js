//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.

var React = require("react");
var ReactDom = require("react-dom");
const name = "Abhishek Uphade";
const currentYear = new Date();
const year = currentYear.getFullYear();
ReactDom.render(
  <div>
    <p>Created by {name} . </p>
    <p>Copyright {year} .</p>
  </div>,
  document.getElementById("root")
);
