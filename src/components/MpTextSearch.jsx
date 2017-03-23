import React from 'react';

var MpTextSearch = React.createClass({

  _handleChange: function(event) {
    this.props.updateSearchText(event.target.value)
  },

  render: function() {

    return (
      <form>
        <input onChange = {this._handleChange} type = "text" placeholder = "search by name, riding, or party" />
      </form>
    )
  }
});



export default MpTextSearch;