import React from 'react';

class MpLocationSearch extends React.Component {
  state = {
    clicked: false
  }



  _selectMp(mpId) {
    this.props.onChange(mpId)
  }


 _getMp() {
  this.setState({clicked:true})

  var lat
  var long
const self = this
  if (!navigator.geolocation) {
      geolocate.innerHTML = 'Geolocation is not available';
  } else {
    console.log('hi')
      navigator.geolocation.getCurrentPosition(function(position) {
          lat = position.coords.latitude;
          long = position.coords.longitude;
          // window.location = '//findmymp.herokuapp.com/location/latitude:'+ lat +'&longitude:'+ long;
          var url =  '//findmymp.herokuapp.com/location/latitude:'+ lat +'&longitude:'+ long;
          console.log(url)
          var riding = ''

          $.ajax({
            url: url,
            dataType: "json",
            async: false,
            data: riding
          }).done(function(res) {
            riding = res
          }).fail(function(res){
          })


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
          var mpId = ''
          mps.map(function (mp) {
            if (mp.riding_id == riding.riding) {
              mpId = mp.id
            }
          });

          console.log(mpId)
          self._selectMp(mpId)
          return mpId

      });
    }

  }



  render() {


  var useIcon = "icon-location"
  var useText = "Your Location"
    if (this.state.clicked === true) {
        useIcon = "icon icon-spin5"
        useText = "Loading..."
      }
    else {
      useIcon = "icon icon-location"
      useText = "Your Location"
    }

    return (
        <div className="row-item">
          <button id="icons" onClick = {this._getMp.bind(this)}><span className={useIcon}></span> {useText}</button>
        </div>
    )
  }
}



export default MpLocationSearch
