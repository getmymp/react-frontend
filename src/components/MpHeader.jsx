import React from 'react';

class MpHeader extends React.Component {

  render() {
    var partyTag;
      if (this.props.mp.party === "Liberal") {
          partyTag = "lib"
        } else if (this.props.mp.party === "Conservative"){
          partyTag = "con"
        } else if (this.props.mp.party === "NDP"){
          partyTag = "ndp"
        } else if (this.props.mp.party === "Bloc Québécois"){
          partyTag = "bloc"
        } else if (this.props.mp.party === "Green Party"){
          partyTag = "green"
        }

    return (
      <div className="row-container mp-head">
        <div className="row-item">
          <div className={"image-crop" + ' ' + partyTag}>
              <img src = {this.props.mp.photo}/>
          </div>
        </div>
        <div className="row-item">
        <p className="mp-lead">
          <span className={"underline" + ' ' + partyTag}>{this.props.mp.name}</span> is the&nbsp;
          <span className={"underline" + ' ' + partyTag}>{this.props.mp.party}</span> MP for the riding of&nbsp;
          <span className={"underline" + ' ' + partyTag}>{this.props.mp.riding_name}</span>
        </p>
        </div>
      </div>
    )
  }
  
}

export default MpHeader;