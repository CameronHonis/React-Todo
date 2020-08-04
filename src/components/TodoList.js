import React from 'react'
import Todo from './Todo.js'

class TodoList extends React.Component{
  constructor(props){
    super()
    this.props = props
  }

  render(){
    let key = 0
    return(
      <div className='todos'>
        {this.props.todos.filter(v => v.task.includes(this.props.searchText)).map(v => (<Todo key={++key} todoData={v} toggleCompleted={this.props.toggleCompleted} />))}
      </div>
    )
  }
}

export default TodoList