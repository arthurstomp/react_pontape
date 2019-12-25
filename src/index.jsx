import React from "react";
import ReactDOM from "react-dom";
import './index.scss'

class Index extends React.Component {
  render() {
    return (
      <h1>Index</h1>
    );
  };
}

export default Index

let wrapper = document.getElementById("index")
if(wrapper) {
  ReactDOM.render(<Index />, wrapper);
}

