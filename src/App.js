import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import SendMessage from "./SendMessage";
import GetMessage from "./GetMessage";

class App extends Component {
  render() {
    return (
        <Router>
          <Home path="/" />
          <SendMessage path="/send-message" />
          <GetMessage path="/get-message" />
        </Router>
    );
  }
}

export default App;
