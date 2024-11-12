import React from "react";
import { STATE } from "../../State/STATE.js";
import './Screen.css';

const infoLineColor = {
    empty: "lightgray",
    fill: "darkgray",
    wrong: "red"
};

export default class Screen extends React.Component {
    constructor(props){
        super(props)
        
        this.state = { ...STATE };

    }
    render() {

        const STYLES = {
            op: {opacity: this.state.infoLine.powerOn ? "1" : "0.25"},
            empty: {color: "lightgray"},
            fill: {color: "darkgray"},
            wrong: {color: "red"}

        
        };
        return ( 
            <div className="screen">
                <div id="info-line">
                    {Object.entries(this.state.infoLine).map(([key, value], i) => {
                        // items history and userInput we don't display there (indexes 2 and 6)
                        switch(i){
                            case 0: // PowerOn ?
                                return <span id={key} key={crypto.randomUUID()}>{value ? "ON" : "OFF"}</span>;

                            case 1: // Current memory value ?
                                return <span id={key} style = {Object.assign(STYLES.op, value > 0 ? STYLES.fill : STYLES.empty)} key={crypto.randomUUID()} >Mem: {value || "0"}</span>;

                            case 3: // count of brackets
                                return <span id={key} key={crypto.randomUUID()}  style={STYLES.op}>
                                    {
                                        value === 0 
                                            ? <span id="noinvalidbrackets" style={Object.assign(STYLES.op, STYLES.empty)} key={crypto.randomUUID()}>( )</span>
                                            : <><span id="open-bracket" style={Object.assign(STYLES.op, STYLES.fill)} key={crypto.randomUUID()}>( </span>{value > 1 ? value : "" }<span id="close-bracket" style={{color: infoLineColor.wrong}} key={crypto.randomUUID()}> )</span></>
                                    }
                                </span>;
                            
                            case 4: // Current num is decimal or integer
                                return <span id={key} key={crypto.randomUUID()} style={STYLES.op}>{value ? "dec" : "int"}</span>;

                            case 5: // count items in shortHistory
                                const length = value.length;
                                return <span id={key} key={crypto.randomUUID()} style={Object.assign(STYLES.op, length > 0 ? STYLES.fill : STYLES.empty)}>{`\u{1F551}`}<sub>{length > 0 ? length : ""}</sub></span>;
                        }
                    })}
                </div>
                <div 
                    id="user-input" 
                    key={crypto.randomUUID()}
                    style={STYLES.op}
                    >{this.state.infoLine.currentUserInput || "..."}</div>
                <div 
                    id="display" 
                    key={crypto.randomUUID()}
                    style={STYLES.op}
                    >{this.state.result}</div>

            </div>    
        )
    }

}