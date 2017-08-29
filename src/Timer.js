import React , { Component } from 'react';

class Timer extends Component {

  componentDidMount(){
    this.timer= setInterval(this.ticker , 1000)
  }

  constructor(props){
    super(props);

    this.state = {
      clock: 3
    };
    this.ticker = this.ticker.bind(this);
  }

  ticker(){
      this.setState({
        clock: new Date()-this.props.start
      })
  }


  render(){
  var clock = Math.round(this.state.clock/ 1000);
    return(
      <div>
        <i>You have been on this site for:</i>
        <br />
        <br />
        <span><b> {clock} </b></span>
        <br />
        <br />
        <i>seconds</i>
      </div>
    );
  }
}

export default Timer;
