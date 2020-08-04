import React from 'react'

class SearchBar extends React.Component{
  constructor(props){
    super()
    this.props = props
  }

  render(){
    return(
      <form className='searchForm'>
        <input
          type='text'
          name='searchBar'
          value={this.props.searchText}
          onChange={e => this.props.setSearchText(e.target.value)}
          placeholder='search'
        />
      </form>
    )
  }
}

export default SearchBar