import { Component } from "react";

export default class Counter extends Component{
    constructor(){
     super();
     this.state={
        count:0
     }       
    }
    addCounter(){
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div className="mt-6">
                <p className="mb-3 text-xl">{this.state.count}</p>
                <button className="bg-green-800 text-white px-5 py-3" onClick={()=>this.addCounter()}>Click To Add</button>
            </div>
        )
    }
}