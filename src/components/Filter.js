import React from 'react'

class Filter extends React.Component{
  state = {
    greased: this.props.filter}
  //
  // handleChange = (event) => (
  //   // console.log(event.target.value)
  //    if (event.target.value === "greased") {
  //       this.setState({filter: true})
  //     } else (event.target.value === "ungreased") {
  //       this.setState({filter: false})
  //     }
  // )

  handleClick = (event) => {
    this.setState({
      greased: !this.state.greased
    })
    console.log(this.state.greased)
  }
  // <select onChange={this.handleChange} value={this.props.filter}>
  // <option value="showAll">Show All!</option>
  // <option value="greased">Greased</option>
  // <option value="ungreased">Ungreased</option>
  // </select>

  render(){
    return(
      <div>
        "Hello"
      </div>
    )
  }
}

export default Filter;
