import React from 'react';

class MpFooter extends React.Component {
  render() {

    return (
      <div className="contact-foot">
        <div>
          <a href={"tel:" + this.props.mp.cons_phone}>
          <span className="icon icon-phone"></span>
          <span className="mobile-hide"> {this.props.mp.cons_phone}</span>
          </a>
        </div>
        <div>
          <a href={"mailto:" + this.props.mp.email}>
            <span className="icon icon-mail"></span>
            <span className="mobile-hide"> {this.props.mp.email}</span>
          </a>
        </div>      
      </div>


    )
  }
  
}

export default MpFooter;