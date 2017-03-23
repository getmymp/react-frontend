import React from 'react';

class ConstituencyAddress extends React.Component {
  render() {
    return (
      <div className="row-item">
        <div className="address">
          <h2>Constituency Office</h2>
          <span>{this.props.mp.cons_address}</span>
        </div>
      </div>
    )
  }
  
}

export default ConstituencyAddress;