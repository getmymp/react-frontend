import React from 'react';

var MpBio = React.createClass({
 
  render: function() {

    return (
      <div>
      {this.props.mp.biourl ? <div className="row-item"><h2>Bio</h2><p>{this.props.mp.biotext}<b><a target="_blank" href={this.props.mp.biourl}>source</a></b></p></div> : ''}
  </div>
    )
  }
});



export default MpBio;