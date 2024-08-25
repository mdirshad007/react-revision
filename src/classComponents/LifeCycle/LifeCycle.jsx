import { Component } from "react";
import Accordion from "../../components/Accordion/Accordion"

export default class LifeCycle extends Component{
    constructor(){
        super()
        console.log("======>Constructor")
        this.state={
            name:"Irshad",
        }
        this.state={
            showButton:true,
        }
    }
    componentDidMount(){
        console.log("=====>componentDidMount")
    }
    componentDidUpdate(){
        console.log("=====>componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("======>componentWillUnmount")
    }
    render(){

        // console.log("========>Render")
        return(
            <div>Name is {this.state.name}
            <button onClick={()=>{this.setState({name:"Khan"})}} className="ml-4 bg-blue-800 text-white px-4 py-4">Update name</button>
            <br/><button className="bg-red-700 text-white px-5 py-3 mt-3" onClick={()=>{this.setState({showButton:!this.state.showButton})}}>Show Input</button>
            {
                this.state.showButton&&<Accordion title="click me" description="Show dsata"/>
            }
            
            </div>
        )
    }
}