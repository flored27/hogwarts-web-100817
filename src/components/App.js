import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import List from './List'
import Filter from './Filter'
import hogs from '../porkers_data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      hogs: hogs,
      greased: true
    }
  }

  changeGreased = () => {
    this.setState({
      greased: !this.state.greased
    })
    console.log(this.state.greased)
  }
  //
  // handleClick = (event) => {
  //   this.setState({
  //     greased: !this.state.greased
  //   })
  //   console.log(this.state.greased)
  // }


  render() {
    // debugger;

    const hogsToShowToUser = this.state.hogs.filter(
      hog => hog.greased
    )
    console.log(hogsToShowToUser)


    return (
      <div className="App">
          < Nav />
          <div>
            <button onClick={this.changeGreased} value={this.state.greased}>Sort</button>
          </div>
          < Filter filter={this.state.greased}/>
          < List hogs={hogsToShowToUser}/>
      </div>
    )
  }
}

export default App;
