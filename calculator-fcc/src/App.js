import React from 'react';
import './App.css';
import Screen from "./Components/Calculator/Screen/Screen";
import DefaultButtons from "./Components/Calculator/DefaultButtons/DefaultButtons";
import { STATE } from './Components/State/STATE'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...STATE};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    
    console.log(e)
    
  }



  render() {
    return (
      <div className="App">
        <div className="calc-body">
                <Screen />
                <DefaultButtons onClick = {(e) => this.handleClick(e.target.name)} disabled = {this.state.infoLine.powerOn}></DefaultButtons>
            </div> 
      </div>
    );
  }
}
