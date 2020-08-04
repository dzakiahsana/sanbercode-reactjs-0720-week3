import React, {Component} from 'react'

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        
        <div class='clock'>
          <h1>sekarang jam: {this.state.date.toLocaleTimeString()}</h1>
        </div>
    
      )
    }
  }
  


  export default Clock 