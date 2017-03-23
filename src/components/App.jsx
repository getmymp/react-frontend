import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import MpFooter from './MpFooter.jsx';
import SingleMpViewCopy from './SingleMpViewCopy.jsx';
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

    function getComponentToRender(element) {
      if (element) {
        return <SingleMpViewCopy />
      } else {
        return <AllMpView data={shuffleArray(mps)} onChange={this._changeSelectedMp} />
      }
    }

    const componentToRender = getComponentToRender(this.state.selectedMP)


    return (
      <Router>
        <div>
          <Navbar
            onChange = { this._changeSelectedMp }
          />

          { componentToRender }
        </div>
      </Router>
    )

  }

  _changeSelectedMp = (mp) => {
    this.setState({
      selectedMP: mp
    })
  }

}
export default App;
