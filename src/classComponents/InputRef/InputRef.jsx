import { Component, createRef } from "react";

export default class InputRef extends Component{
    constructor(){
        super()
        this.inputRefval=createRef();
    }
    handelInputRef(){
        console.log(this.inputRefval.current.value)
        this.inputRefval.current.style.color="red"
    }
    render(){
        return(
            <div>
               <input type="text" name="" ref={this.inputRefval} id="" className="w-4/12 mx-auto h-10 border border-gray-400 p-3" placeholder="Search.." />
               <button className="h-10 text-white bg-green-700 px-4 -mt-1" onClick={()=>this.handelInputRef()}>Search</button>
            </div>
        )
    }
}