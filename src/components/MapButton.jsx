import React from 'react';

var MapButton = React.createClass({
  _selectMap: function(event) {
    this.props.onClick(event.target.value)
  },

    render: function() {

        return (
        <div className="row-item">
          <button onClick = {this._selectMap}><span className="icon icon-globe"></span> Map</button>
        </div>

          )
    }
});



export default MapButton;