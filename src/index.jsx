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

ReactDOM.render(<Index />, document.getElementById("index"));

