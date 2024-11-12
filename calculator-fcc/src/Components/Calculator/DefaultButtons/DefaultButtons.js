import React from "react";
import { DefaultButtonsData } from "./DefaultButtonsData";
import styles from './DefaultButtons.css'

export default class DefaultButtons extends React.Component {
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
                        style: {
                            gridArea: obj.id
                        }
                    }, 
                    obj.value))
            )
        )
    }
}