import React from 'react';
import SearchButton from './SearchButton.jsx';
import MapButton from './MapButton.jsx';
import MpLocationSearch from './MpLocationSearch.jsx';

class MpIntro extends React.Component {


  render() {


    return (
      <div>
      <div className="column-container-center">

        <h1>GET MY MP</h1>

      </div>

      <div className="row-container">
        <MpLocationSearch onChange={ this.props.onChange } />
        <MapButton onClick = {this.props.selectMapBox}/>
        <SearchButton onClick = {this.props.selectSearchBox} />
      </div>
      </div>
    )
  }

}

export default MpIntro;
