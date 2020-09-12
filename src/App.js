import React, { Component } from "react";
import Todos from "./components/Todo";
import UserComponent from "./components/UserComponent";
import AddTodo from "./components/AddTodo"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from "./components/Post"
import Notification from './components/Notification'
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy Some Milk" },
      { id: 2, content: "Play Cricket" },
    ],
  };

  deleteTodo = (id) =>{
    const todos= this.state.todos.filter(todo =>{
      return todo.id!== id
    })
    this.setState({
      todos:todos
    })

  }

  addTodo = (todo) =>{
    todo.id= Math.random()
    const todos = [...this.state.todos, todo]
    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <BrowserRouter>
      <div className= "todo-app container">
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/notification' component={Notification} />
      <Route path='/:post_id' component={Post} />
      
      </Switch>
      <h1 className="center blue-text"> Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo= {this.addTodo} />
      <p>store data check</p>
      <UserComponent />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
