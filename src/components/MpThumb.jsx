import React from 'react';

var MpThumb = React.createClass({

  _selectMp: function(event) {

    console.log("selected" + this.props.data.name)
    this.props.onChange(this.props.data.id)


  },

    render: function() {

      var mpTag;
        if (this.props.data.party === "Liberal") {
            mpTag = "mp-index-tag lib"
          } else if (this.props.data.party === "Conservative"){
            mpTag = "mp-index-tag con"
          } else if (this.props.data.party === "NDP"){
            mpTag = "mp-index-tag ndp"
          } else if (this.props.data.party === "Bloc Québécois"){
            mpTag = "mp-index-tag bloc"
          } else if (this.props.data.party === "Green Party"){
            mpTag = "mp-index-tag green"
          }
        return (
            <div className="mp-index" onClick={this._selectMp}>
              <a className="mp-hover">
                <div className="image-crop">
                  <img src = {this.props.data.photo} />
                </div>
              </a>
              <div className={mpTag}>
                <span>{this.props.data.name}</span>
                <span>{this.props.data.riding_name}</span>
              </div> 
            </div>
          )
    }
});



export default MpThumb;