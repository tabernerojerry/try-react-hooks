import React, { Component } from "react";

import Counter from "./components/Counter";
import Likes from "./components/Likes";
import { Usage } from "./components/Tilt";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Hooks</h1>
        <Counter />
        <Likes />
        <Usage />
      </div>
    );
  }
}

export default App;
