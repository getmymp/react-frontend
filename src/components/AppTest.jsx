import React from 'react';
import Navbar from './Navbar.jsx';
import MpFooter from './MpFooter.jsx';

import SingleMpView from './SingleMpView.jsx';

import AllMpView from './AllMpView.jsx';



class AppTest extends React.Component {


    render() {

      var mps = []

      $.ajax({
        url: '//findmymp.herokuapp.com/members',
        dataType: "json",
        async: false,
        data: mps
      }).done(function(res) {
        mps = res
      }).fail(function(res){
      })

      console.log("data\n--------\n" + mps)

      return (
        <div>
          {mps.map(function(mp){
            return (<p key={mp.name} data={mp}>{mp.name}</p>)
          }, this)}
        </div>
      )
    }
  }

export default AppTest;
