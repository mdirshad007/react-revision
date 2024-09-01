import { Component } from "react";

export default class FirstCom extends Component{
    render(){
        return(
            <div>
                This is First component {this.props.name}
            </div>
        )
    }
}