import React from "react";
import ReactDOM from "react-dom";
import './index.scss'

declare interface propsType {
  txt: string
}
declare interface stateType {
  count: number
}
class Index extends React.Component<propsType,stateType> {
  static defaultProps: propsType = {
    txt: 'hello'
  }

  state: stateType = {
    count: 0
  }

  render(): JSX.Element {
    let incrementCount = () => { this.setState({count: ++this.state.count}) }
    return (
      <React.Fragment>
        <h1>Index {this.props.txt}</h1>
        <button onClick={incrementCount}>
          Increment Count
        </button>
      </React.Fragment>
    )
  }
}
export default Index

let wrapper: HTMLElement = document.getElementById("index")
if(wrapper) {
  ReactDOM.render(<Index />, wrapper);
}
