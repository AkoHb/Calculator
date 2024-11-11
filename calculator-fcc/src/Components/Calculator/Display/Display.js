import React from "react";

export default class Display extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            infoLine : {
                powerOn: props?.powerOn || "OFF",
                memory: props?.memory || "0",
                currentUserInput: props?.userInput || "",
                branches: props?.branches || "()",
                numIsDecimal: props?.decNum || "."
            },
            result: props?.result || "0"
        }


}
    render() {
        return ( true )
    }

}