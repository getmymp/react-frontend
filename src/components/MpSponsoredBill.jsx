import React from 'react';
var ReactTooltip = require("react-tooltip")

var MpSponsoredBill = React.createClass({


  render: function() {
    var sponsored_bills = this.props.mp.sponsored_bills
    console.log(this.props.mp.sponsored_bills)
    return (
      <div>
      <ReactTooltip data-multiline='true'/>

      {(this.props.mp.sponsored_bill_tally >= 1) ?

      <div className="row-item">
        <h2>Sponsored Bills <span data-multiline='true' data-tip="Here are the bills this member has brought into Parliament. If passed, they could become law!" className="icon icon-help-circled"></span> </h2>
          
          {sponsored_bills.map(function(bill){
          
            return (
              <div className='spons-bill'>
                <span className="line">{bill.bill}<br/></span>
                <span className="line">{bill.date_introducted}<br/></span>
                <span className="line">{bill.description}<br/></span>
                <span className="line>">&nbsp;</span>

              </div>

              )

          })}
        
      </div> : ''}

  </div>
    )
  }
});



export default MpSponsoredBill;