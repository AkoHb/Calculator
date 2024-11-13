import React from "react";
import './Screen.css';
import { STATE } from '../../State/STATE'

export default class Screen extends React.Component {
    constructor(props){
        super(props)
    }
    render() {

        const STYLES = {
            op: {opacity: this.props.powerOn ? "1" : "0.25"},
            empty: {color: "lightgray"},
            fill: {color: "darkgray"},
            wrong: {color: "red"}
        };

        return ( 
            <div className="screen">
                <div id="info-line">
                    {Object.entries(STATE).map(([key, value], i) => {
                        // items history and userInput we don't display there (indexes 2 and 6)
                        switch(i){
                            case 0: // PowerOn ?
                                return <span id={key} key={crypto.randomUUID()}>{this.props.powerOn ? "ON" : "OFF"}</span>;

                            case 1: // Current memory value ?
                                return <span id={key} style = {Object.assign(STYLES.op, this.props.memory > 0 ? STYLES.fill : STYLES.empty)} key={crypto.randomUUID()} >Mem: {this.props.memory || "0"}</span>;

                            case 3: // count of brackets
                                return <span id={key} key={crypto.randomUUID()}  style={STYLES.op}>
                                    {
                                        this.props.brackets === 0 
                                            ? <span id="noinvalidbrackets" style={Object.assign(STYLES.op, STYLES.empty)} key={crypto.randomUUID()}>( )</span>
                                            : <><span id="open-bracket" style={Object.assign(STYLES.op, STYLES.fill)} key={crypto.randomUUID()}>( </span>{this.props.brackets > 1 ? this.props.brackets : "" }<span id="close-bracket" style={STYLES.wrong} key={crypto.randomUUID()}> )</span></>
                                    }
                                </span>;
                            
                            case 4: // Current num is decimal or integer
                                return <span id={key} key={crypto.randomUUID()} style={STYLES.op}>{this.props.decimal ? "dec" : "int"}</span>;

                            case 5: // count items in shortHistory
                                const length = this.props.history.length;
                                return <span id={key} key={crypto.randomUUID()} style={Object.assign(STYLES.op, length > 0 ? STYLES.fill : STYLES.empty)}>{`\u{1F551}`}<sub>{length > 0 ? length : ""}</sub></span>;
                        }
                    })}
                </div>
                <div 
                    id="user-input" 
                    key={crypto.randomUUID()}
                    style={STYLES.op}
                    >{this.props.input || "..."}</div>
                <div 
                    id="display" 
                    key={crypto.randomUUID()}
                    style={STYLES.op}
                    >{this.props.result}</div>

            </div>    
        )
    }

}