import React from 'react';
import './App.css';
import Screen from "./Components/Calculator/Screen/Screen";
import DefaultButtons from "./Components/Calculator/DefaultButtons/DefaultButtons";
import { STATE } from './Components/State/STATE';
import { EVENTS } from './Components/EVENTS';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...STATE};
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick = name => {
    console.log(`Button is n=${name}`)
    const numsWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const operators = ["+", "-", "/", "*"];
    const operatorsWord = ["add", "subtract", "divide", "multiply"]


    if ( name === "power") return this.setState(state => {return {powerOn: !state.powerOn }});

    return (

      this.setState(state => 
        
        {switch(true) {
          
          case name === "percentage":
            if (EVENTS.canAddOperator(state.currentUserInput, "%")) {
              return {
                currentUserInput: [...state.currentUserInput, "%"],
                mathFormArr: [...state.mathFormArr, "/100"]
              }
            }
            break;

          case numsWord.includes(name): 
            if (name === "zero") {
              // console.log(`Can add zero? ${EVENTS.canAddZero(state.currentUserInput, state.numIsDecimal)} flag=${state.numIsDecimal}`)
              if (!EVENTS.canAddZero(state.currentUserInput, state.numIsDecimal)) {
                break;
            }}
            
            return {
              currentUserInput: [...state.currentUserInput, `${numsWord.indexOf(name)}`],
              mathFormArr: [...state.mathFormArr, `${numsWord.indexOf(name)}`],
            }
            
          case name === "decimal": 
          // console.log(`Can change to float? ${EVENTS.changeToFloat(state.currentUserInput, state.numIsDecimal)}`)
            if (EVENTS.changeToFloat(state.currentUserInput, state.numIsDecimal)) {
              return {
                currentUserInput: [...state.currentUserInput, "."],
                mathFormArr: [...state.mathFormArr, "."],
                numIsDecimal: true,
              }
            }
            break;

          
          case name === "root": 
            if (EVENTS.canGetSQRT(state.currentUserInput, operators)) {
              return {
                currentUserInput: [...state.currentUserInput, `\u{221A}(`],
                mathFormArr: [...state.mathFormArr, "Math.sqrt("],
                numIsDecimal: false,
                brackets: state.brackets + 1,
              }
            }
            break;

          case name === "backspace":
            if (EVENTS.canRemoveLastcharacter(state.currentUserInput)) {
              let someRes = {}
              if (state.currentUserInput.at(-1) === ".") {
                someRes.numIsDecimal =  true;
              } else if (state.currentUserInput.at(-1) === ")") {
                someRes.brackets = state.brackets + 1;
              } else if (state.currentUserInput.at(-1) === "(") {
                someRes.brackets = state.brackets - 1;
              }
              return {
                ...someRes,
                currentUserInput: state.currentUserInput.slice(0, -1),
                mathFormArr: state.mathFormArr.slice(0, -1)
              }
            }

            break;

          case name === "o-bracket":
            return {
                currentUserInput: [...state.currentUserInput, "("],
                mathFormArr: [...state.mathFormArr, "("],
                numIsDecimal: false,
                brackets: state.brackets + 1,
            }

          case name === "c-bracket":
            if (EVENTS.canCloseBracket(state.currentUserInput, state.brackets)) {
              return {
                  currentUserInput: [...state.currentUserInput, ")"],
                  mathFormArr: [...state.mathFormArr, ")"],
                  numIsDecimal: false,
                  brackets: state.brackets - 1,
              }
            }
            break;

          case name === "plus-minus":
            return {...EVENTS.changeSign(state.currentUserInput, state.mathFormArr)}

          case operatorsWord.includes(name): 
            if (EVENTS.canAddOperator(state.currentUserInput, name)) {
              return {
                currentUserInput: [...state.currentUserInput, ")"],
                mathFormArr: [...state.mathFormArr, ")"],
              }
            }
            break;




          }
        }
        
      )

    )
  }
  
  
  
  render() {
    return (
      <div className="App">
        <div className="calc-body">
          <p>*** {this.state.mathFormArr} ***</p>
                <Screen 
                  powerOn={this.state.powerOn}
                  brackets = {this.state.brackets}
                  input = {this.state.currentUserInput}
                  result = {this.state.result}
                  memory = {this.state.memory}
                  history = {this.state.shortHistory}
                  decimal = {this.state.numIsDecimal}
                />

                <DefaultButtons onClick = {(e) => this.handleClick(e.target.name)} disabled = {!this.state.powerOn}></DefaultButtons>
            </div> 
      </div>
    );
  }
}
