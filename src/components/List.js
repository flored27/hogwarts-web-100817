import React from 'react';
import PigCard from './PigCard'


class List extends React.Component {
  constructor(props){
    super()

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      hasBeenClicked: false
    };
  }

    handleToggle(event){
       console.log('name: ',event.target.id)
          //here you will get the value of the li element
          function piggyFinder(piggy) {
            return piggy.name === event.target.id;
          }

          const clickedPiggy = this.props.hogs.find(piggyFinder);
          console.log('object',clickedPiggy);
          // return <p>{clickedPiggy.specialty} {clickedPiggy.greased} {clickedPiggy['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} {clickedPiggy['highest medal acheived']}</p>
          // { name: 'cherries', quantity: 5 }
          this.setState({
            hasBeenClicked: !this.state.hasBeenClicked
          })
          console.log('has been clicked state: ',this.state.hasBeenClicked)

     }


    render () {




      const showName = this.props.hogs.map((hog, i) => (
          <PigCard hog={hog}/>
        )
      )



    // const showAll = this.props.hogs.map
    //     if (this.state.hasBeenClicked === true) {
    //       <div className="ui eight wide column">
    //       <p style={{display:'none'}} >{hog.specialty} {hog.greased} {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} {hog['highest medal acheived']}</p>
    //       </div>
    //     }
    //     if (this.state.hasBeenClicked === false) {
    //       <div className="ui eight wide column">
    //       <p style={{display:'block'}} >{hog.specialty} {hog.greased} {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} {hog['highest medal acheived']}</p>
    //       </div>
    //     }




    return (
      <div>
        <ul className="ui grid container">
            {showName}
        </ul>

      </div>
    )

  };

};

export default List;
