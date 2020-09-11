import React, { Component } from "react";
import Todos from "./components/Todo";
import UserComponent from "./components/UserComponent";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy Some Milk" },
      { id: 2, content: "Play Cricket" },
    ],
  };
  render() {
    return (
      <div>
        <h1 className="center blue-text"> Todo's</h1>
        <Todos todos={this.state.todos} />
        <p>store data check</p>
        <UserComponent />
      </div>
    );
  }
}

export default App;
