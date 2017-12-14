import React from 'react';

class PigCard extends React.Component{
  state = {
    hasBeenClicked: false
  }

  handleToggle = () => {
    this.setState({
      hasBeenClicked: !this.state.hasBeenClicked
    })
  }

  render(){
    const hog = this.props.hog
    const itemShown = this.state.hasBeenClicked ? <p style={{display:'block'}} >{hog.specialty} {hog.greased} {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} {hog['highest medal acheived']}</p> : ''
    // debugger;
    return(
      <div onClick={this.handleToggle} className="ui eight wide column">
        <li id={hog.name} >{hog.name}</li>
        {itemShown}
      </div>
    )
  }
}


export default PigCard;
