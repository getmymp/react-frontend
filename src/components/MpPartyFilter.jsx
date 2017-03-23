import React from 'react';
var ReactTooltip = require("react-tooltip")

var MpPartyFilter = React.createClass({
  
    _handleChange: function(event) {
    this.props.updateSearchText(event.target.value)
  },


  render: function() {

    return (
      <div className="row-container no-margin">
      <ReactTooltip/>
     
        <div className="filter all">
          <input type="radio" name="party" onChange={this._handleChange} value="" defaultChecked={true}/> 
          All
        </div>
        <div className="filter lib">
          <input type="radio" name="party" onChange={this._handleChange} value="Liberal"/> 
          <span data-multiline="true" data-tip="Centrist party. Ideals range from environmentalism, political reform, fighting climate change,<br> tax reform and championing the middle class.">Liberal</span>
        </div>
        <div className="filter con">
          <input type="radio" name="party" onChange={this._handleChange} value="Conservative"/> 
          <span data-multiline="true" data-tip="Known as Canada’s political right, this is a broad coalition between those who are religious, those who wish to limit<br> the powers and activity of government. As a party, their chief beliefs include accountability, fiscal prudence, and a focused foreign policy">Conservative</span>
        </div>
        <div className="filter ndp">
          <input type="radio" name="party" onChange={this._handleChange} value="NDP"/> 
          <span data-multiline="true" data-tip="Seen as Canada’s Left. A coalition of those who believe in the supremacy of government in day-to-day affairs, <br>those who believe that the environment is the highest priority as well as organized labour interests.">NDP</span>
        </div>
        <div className="filter bloc">
          <input type="radio" name="party" onChange={this._handleChange} value="Bloc Québécois"/> 
          <span data-multiline="true" data-tip="The Bloc Québécois is a regional party focused on the interests of Quebec. <br>As policy, it supports the seperation of Quebec from Canada and champions <br>industry and the primacy of the French language in Quebec. ">Bloc Québécois</span>
        </div>
        <div className="filter green">
          <input type="radio" name="party" onChange={this._handleChange} value="Green Party"/> 
          <span data-multiline="true" data-tip="The Green Party differs from the other parties by focusing on specific issues as opposed to a broad swath, <br>and is diffuse in its support. The Green Party seeks to increase the focus on environmental and<br> health issues that are the result of our accelerating technological base. <br>In addition, the leader promotes raising the conduct of elected MP's inside and outside of Parliament.">Green Party</span>
        </div>
      </div>
    )
  }
});



export default MpPartyFilter;