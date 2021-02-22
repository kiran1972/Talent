import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;
  

    constructor(props) {
    super(props);
        this.state = { currentCount: 0,CC:"red",RR:255,GG:255,BB:255 };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.incrementRedCounter = this.incrementRedCounter.bind(this);
        this.incrementGreenCounter = this.incrementGreenCounter.bind(this);
        this.incrementBlueCounter = this.incrementBlueCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

    incrementRedCounter() {
        this.setState({
            RR:this.state.RR + 1
        });
        if (this.state.RR > 255) {
            this.setState({
                RR:this.state.RR = 0
            });
        }
        this.setState({
            CC:this.state.CC = "rgb(" + this.state.RR + "," + this.state.GG + "," + this.state.BB + ")"
        });
        }

    incrementGreenCounter() {
        this.setState({
            GG:this.state.GG + 1
        });
        if (this.state.GG > 255) {
            this.setState({
                GG: this.state.GG = 0
            });
        }
        this.setState({
            CC:this.state.CC = "rgb(" + this.state.RR + "," + this.state.GG + "," + this.state.BB + ")"
        });
    }

    incrementBlueCounter() {
        this.setState({
            BB:this.state.BB + 1
        });
        if (this.state.BB > 255)
            this.setState({
                BB:this.state.BB = 0
            });

        this.setState({
            CC:this.state.CC = "rgb(" + this.state.RR + "," + this.state.GG + "," + this.state.BB + ")"
        });
    }
    componentDidMount() {
        console.log("Counter:componentDidMount");
        document.getElementsByTagName("body")[0].style.background = "red";
    }

    componentWillMount() {
        console.log("Counter:componentWillMount");
    }

    componentDidUpdate() {
        console.log("Counter:componentDidUpdate");
        if (this.state.CC == "red") {
            console.log("Counter:componentDidUpdate:BGCOLOR: " + this.state.CC);
            this.state.CC="green"
        } else if (this.state.CC == "green") {
            console.log("Counter:componentDidUpdate:BGCOLOR: " + this.state.CC);
            this.state.CC = "red"
        }
        document.getElementsByTagName("body")[0].style.background = this.state.CC;
        //document.getElementsByTagName("body")[0].style.background = "rgb("+this.state.RR+","+this.state.GG+","+this.state.BB+")";
        /*if (document.getElementsByTagName("body")[0].getAttribute("style") == "background: red;") {
        document.getElementsByTagName("body")[0].style.background = "green";
        } else if (document.getElementsByTagName("body")[0].getAttribute("style") == "background: green;") {
        document.getElementsByTagName("body")[0].style.background = "red";
        }*/
        console.log("Counter:componentDidUpdate: " + document.getElementsByTagName("body")[0].getAttribute("style"));
    }

    componentWillUnmount() {
        console.log("Counter:componentWillUnmount");
    }
    render() {
        console.log("Counter:render");

    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

            <button className="btn btn-primary" onClick={this.incrementRedCounter}>IncrementRed</button>
            <button className="btn btn-primary" onClick={this.incrementGreenCounter}>IncrementGreen</button>
            <button className="btn btn-primary" onClick={this.incrementBlueCounter}>IncrementBlue</button>
      </div>
    );
  }
}
