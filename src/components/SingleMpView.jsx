import React from 'react';
import MpHeader from './MpHeader.jsx';
import MpStats from './MpStats.jsx';
import MpNews from './MpNews.jsx';
import MpBio from './MpBio.jsx';
import MpCommittees from './MpCommittees.jsx';
import MpSponsoredBill from './MpSponsoredBill.jsx';

import ConstituencyAddress from './ConstituencyAddress.jsx';
import SingleRidingMap from './SingleRidingMap.jsx';

import MpFooter from './MpFooter.jsx';


class SingleMpView extends React.Component {

getMp() {
  for (var index in this.props.data){
    if (this.props.data[index].id == this.props.mp)
      return this.props.data[index]
  }
  return null
}

  


  render() {


window.scrollTo(0, 100)


    return (
      <div>
        <div className="body">
          <main className="main">
            <div className="main-body">
              <section>
               <MpHeader mp = {this.getMp()} />
               <MpStats mp = {this.getMp()} />
               <div className="row-container">

                  <div className="column-container mp-column">
                    <SingleRidingMap mp = {this.getMp()} /> 
                    <ConstituencyAddress mp = {this.getMp()} />
                  </div>

                  <div className="column-container mp-column">
                    <MpBio mp = {this.getMp()} />
                    <MpNews mp = {this.getMp()} />
                  </div>

                  <div className="column-container mp-column">
                    <MpCommittees mp = {this.getMp()} />
                    <MpSponsoredBill mp = {this.getMp()} />
                  </div>


                  
                </div>
               
                <div style={{height:'50px'}}></div>
              
              </section>
            </div>
          </main>
        </div>
        <MpFooter mp = {this.getMp()} />   
      </div>
    )
  }
  
}

export default SingleMpView;