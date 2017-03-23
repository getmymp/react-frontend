import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import MpFooter from './MpFooter.jsx';
import SingleMpView from './SingleMpView.jsx';
import AllMpView from './AllMpView.jsx';

class App extends React.Component {

  state = {
    selectedMP: null
  }

  render() {

    var shuffleArray = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

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

    const componentToRender = this.state.selectedMP
    ? <SingleMpView
        mp = {this.state.selectedMP}
        data = { mps}
      />
    : <AllMpView
        data = { shuffleArray(mps) }
        onChange = { this._changeSelectedMp }
    />

    return (
      <div>
        <Navbar
          onChange = { this._changeSelectedMp }
        />

        { componentToRender }
      </div>
    )

  }

  _changeSelectedMp = (mp) => {
    this.setState({
      selectedMP: mp
    })
  }

}
export default App;
