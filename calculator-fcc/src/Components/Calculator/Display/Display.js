import React from "react";
import { STATE } from "../../State/STATE.js";
import './Display.css';

const infoLineColor = {
    empty: "lightgray",
    fill: "darkgray",
    wrong: "red"
}

export default class Display extends React.Component {
    constructor(props){
        super(props)
        
        this.state = { ...STATE };

}
    render() {
        return ( 
            <div className="screen">
                <div id="info-line">
                    {Object.entries(this.state.infoLine).map(([key, value], i) => {
                        // items history and userInput we don't display there (indexes 2 and 6)
                        switch(i){
                            case 0: // PowerOn ?
                                return <span id={key}>{value ? "ON" : "OFF"}</span>;

                            case 1: // Current memory value ?
                                return <span id={key} style={ value > 0 ? {color: infoLineColor.fill} : {color: infoLineColor.empty}}>Mem:{value || "0"}</span>;

                            case 3: // count of brackets
                                return <span id={key}>
                                    {
                                        value === 0 
                                            ? <span id="noinvalidbrackets" style={{color: infoLineColor.empty}}>()</span>
                                            : <><span id="open-bracket" style={{color: infoLineColor.fill}}>(</span>{value > 1 ? value : "" }<span id="close-bracket" style={{color: infoLineColor.wrong}}>)</span></>
                                    }
                                </span>;
                            
                            case 4: // Current num is decimal or integer
                                return <span id={key}>{value ? "dec" : "int"}</span>;

                            case 5: // count items in shortHistory
                                const length = value.length;
                                return <span id={key} style={ length > 0 ? {color: infoLineColor.fill} : {color: infoLineColor.empty}}>{`\u{1F551}`}{length > 0 ? length : ""}</span>;
                        }
                    })}
                </div>

            </div>    
        )
    }

}