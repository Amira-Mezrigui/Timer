import React, { Component } from 'react'
import'./Timer.css'

class Timer extends Component {
    constructor(){
        super()
        this.state={
            time:0
        }
     
    }

    newTime=(event)=>{
        this.setState({
            time:event.target.value
           
        }) 
        
     }
    

    render() {
        return (
            <div>
                <h1>{this.state.time*3600} secondes</h1>
                <label for='time'>la durée en heures :</label>
                <input type='number' id='time' value={this.state.time} onChange={this.newTime}/>
                <button onClick={this.newtime} >Restart</button>
            </div>
        )
    }
}
export default Timer;