import React from 'react';

var SearchButton = React.createClass({
  _selectSearch: function(event) {
    this.props.onClick(event.target.value)
  },

  render: function() {

    return (
      <div className="row-item">
        <button onClick = {this._selectSearch}><span className="icon icon-search"></span> Search</button>
      </div>
    )

  }

});

export default SearchButton;