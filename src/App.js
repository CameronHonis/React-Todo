import React from 'react';
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'
import SearchBar from './components/SearchBar.js'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: [],
      searchText: '',
    }
  }

  addTodo = v => {
    this.setState({todos: [...this.state.todos, v]})
  }

  clearCompleted = () => {
    this.setState({todos: this.state.todos.filter(v => !v.completed)})
  }

  toggleCompleted = id => {
    const indexFromId = this.state.todos.findIndex(v => v.id === id)
    const todosClone = [...this.state.todos]
    todosClone[indexFromId] = {...todosClone[indexFromId], completed: !todosClone[indexFromId].completed}
    this.setState({todos: todosClone})
  }

  setSearchText = text => {
    this.setState({searchText: text})
  }

  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText}/>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} searchText={this.state.searchText} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} setSearchText={this.setSearchText} />
      </div>
    );
  }
}

export default App;
