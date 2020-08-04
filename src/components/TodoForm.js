import React from 'react'

const initialFormData = {
  addText: '',
}

class TodoForm extends React.Component {
  constructor(props){
    super()
    this.props = props
    this.state = {
      formData: initialFormData,
      renderRequest: false
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const overrides = this.validate()
    if (!overrides) return
    this.props.addTodo({
      task: overrides.formData.addText || this.state.formData.addText,
      id: Date.now(),
      completed: false
    })
    this.setState({formData: initialFormData})
    this.props.setSearchText('')
  }

  validate(){
    const overrides = {formData: initialFormData}
    if (!this.state.formData.addText){
      return
    } else if (this.state.formData.addText.length > 28){
      overrides.formData = {addText: this.state.formData.addText.slice(0,26)+'...'}
    }
    return overrides
  }

  // onSubmit = async e => {
  //   e.preventDefault()
  //   console.log('a')
  //   const valid = await new Promise(() => this.validate())
  //   if (!valid) return
  //   console.log('d')
  //   this.props.addTodo({
  //     task: this.state.formData.addText,
  //     id: Date.now(),
  //     completed: false
  //   })
  //   this.setState({formData: initialFormData})
  //   this.props.setSearchText('')
  // }

  // async validate(){
  //   const overRides = {formData: initialFormData}
  //   if (!this.state.formData.addText){
  //     return
  //   } else if (this.state.formData.addText.length > 28){
  //     await new Promise(() => this.setState({formData: {addText: this.state.formData.addText.slice(0,25)+'...'}}))
  //     console.log('b')
  //   }
  //   console.log('c')
  //   return true
  // }

  render(){
    return(
      <form className='todoForm' onSubmit={this.onSubmit}>
        <input
          type='text'
          name='addText'
          value={this.state.formData.addText}
          onChange={e => this.setState({formData: {[e.target.name]: e.target.value}})}
        />
        <button onClick={this.onSubmit}>Add to List</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    )
  }
}

export default TodoForm