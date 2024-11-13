import React from "react";
import { DefaultButtonsData } from "./DefaultButtonsData";
import './DefaultButtons.css'

export default class DefaultButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            React.createElement(
                "div",
                {
                    className: "container",
                    key: crypto.randomUUID(),
                },
                DefaultButtonsData.map(obj => React.createElement(
                    "button", 
                    {
                        ...obj, 
                        key: crypto.randomUUID(),
                        onClick: this.props.onClick,
                        disabled: obj.id === "power" ? "" : this.props.disabled,
                        style: {
                            gridArea: obj.id
                        }
                    }, 
                    obj.id === "power" ? this.props.disabled ? "ON" : "OFF" : obj.value))
            )
        )
    }
}