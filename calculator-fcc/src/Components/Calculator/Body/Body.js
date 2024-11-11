import React from "react";
import Display from "../Display/Display";
import DefaultButtons from "../DefaultButtons/DefaultButtons";
import './Body.css'

export default class Body extends React.Component { 
    render() {
        return (
            <div className="calc-body">
                <Display />
                <DefaultButtons />
            </div>    
        );
    }
}