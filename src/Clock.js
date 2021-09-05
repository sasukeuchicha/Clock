import React, { Component } from "react";
import './Clock.scss';
class Clock extends Component{

    clockInterval = "";
    constructor(props) {
        super(props);
        this.handleDate = this.handleDate.bind(this);
        this.state = { hours: "", minutes: "", seconds: ""}; }

    //builds component as per the interval
    componentDidMount() {
        this.clockInterval = setInterval(this.handleDate, 1000);
    }
    
    //helps in cleanup to save space mem
    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }
    
    //Date objects same as java
    handleDate() {
        const date = new Date();
        date.setHours(date.getHours());
        let hours = this.formatTime(date.getHours());
        let minutes = this.formatTime(date.getMinutes());
        let seconds = this.formatTime(date.getSeconds());
        this.setState({ hours, minutes, seconds });
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    render(){
        const { hours, minutes, seconds } = this.state;
        const secondsStyle = {
          transform: `rotate(${seconds * 6}deg)`
        };
        const minutesStyle = {
          transform: `rotate(${minutes * 6}deg)`
        };
        const hoursStyle = {
          transform: `rotate(${hours * 30}deg)`
        };
        const { title } = this.props;
        return (
          <div className={"clock"}>
            <h1>{title}</h1>
            <div className={"analog-clock"}>
              <div className={"dial seconds"} style={secondsStyle} />
              <div className={"dial minutes"} style={minutesStyle} />
              <div className={"dial hours"} style={hoursStyle} />
            </div>
            <div className={"digital-clock"}>
              {hours}:{minutes}:{seconds}
            </div>
          </div>
        );
      }

};

export default Clock;