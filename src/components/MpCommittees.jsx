import React from 'react';
var ReactTooltip = require("react-tooltip")

var MpCommittees = React.createClass({


  render: function() {
    var committees = this.props.mp.committees
    console.log(this.props.mp.committees)
    return (
      <div>
      <ReactTooltip data-multiline='true'/>

      {this.props.mp.committee_tally ? 
      <div className="row-item">
        <h2>Committees <span data-multiline='true' data-tip="A committee of the House of Commons is a small group of Members created and <br>empowered by the House to perform specific tasks, such as the examination<br> of bills, estimates and other matters that relate to its specific mandate." className="icon icon-help-circled"></span> </h2>
        <ul>
          {committees.map(function(committee){
            return (
              <li>{committee}</li>
              )
          })}
          
        </ul>
      </div> : ''}

  </div>
    )
  }
});



export default MpCommittees;