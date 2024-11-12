import React from "react";
import Screen from "../Screen/Screen";
import DefaultButtons from "../DefaultButtons/DefaultButtons";
import './Body.css'

export default class Body extends React.Component { 
    render() {
        return (
            <div className="calc-body">
                <Screen />
                <DefaultButtons />
            </div>    
        );
    }
}