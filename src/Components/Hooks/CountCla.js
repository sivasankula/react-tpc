import React, { Component } from "react";

class CountCla extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count : 0
        }
    }
    interTimeValue = ''
    componentDidMount = () => {
         this.interTimeValue =  setInterval(() => {
            console.log('edsc')
            this.setState(prevTime => ({count:prevTime.count + 1}))
        },1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.interTimeValue)
    }

    render = () => {
        return (
            <div>
                Count == {this.state.count}
            </div>
        )
    }
}

export default CountCla;