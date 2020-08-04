import React from 'react'
import './Todo.css'

class Todo extends React.Component{
  constructor(props){
    super()
    this.props = props
  }

  render(){
    return(
      <div
        onClick={() => this.props.toggleCompleted(this.props.todoData.id)}
        className={this.props.todoData.completed ? 'completed' : null}
      >
        <p className='.noselect'>{this.props.todoData.task}</p>
      </div>
    )
  }
}

export default Todo