import React from "react";
import Display from "./Display/Display";
import DefaultButtons from "./DefaultButtons/DefaultButtons";

export default class Body extends React.Component { 
    render() {
        return (
            <>
                <Display />
                <DefaultButtons />
            </>    
        );
    }
}