import React from 'react';
import MpThumb from './MpThumb.jsx';
import MpIntro from './MpIntro.jsx';
import MpTextSearch from './MpTextSearch.jsx';
import MpMapSearch from './MpMapSearch.jsx';
import MpPartyFilter from './MpPartyFilter.jsx';


class AllMpView extends React.Component {
  state = {
    searchText: '',
    searchBox: false,
    mapBox: false
  }

  render() {

    var filterData = this.props.data.filter((data) => {
      var text = this.state.searchText
      return data.name.toUpperCase().includes(text.toUpperCase()) ||  
      data.party.toUpperCase().includes(text.toUpperCase()) || 
      data.riding_name.toUpperCase().includes(text.toUpperCase())
    })

    return (
      <div>
        <div className="body">
          <main className="main">
            <div className="main-body">
              <section>   


              <MpIntro selectSearchBox = { this._selectSearchBox } selectMapBox = {this._selectMapBox} onChange={ this.props.onChange }/> 
              
             
              {this.state.mapBox ?  <MpMapSearch onChange={ this.props.onChange } /> : ''}
              {this.state.searchBox ? <MpTextSearch updateSearchText = { this._updateSearchText }/> : ''}
              <MpPartyFilter updateSearchText = { this._updateSearchText }/>
              <div id="mp-container">

                {filterData.map(function(mp){
                  return (<MpThumb key={mp.name} data={mp} onChange={ this.props.onChange } />)
                }, this)}

              </div>


              </section>
            </div>
          </main>
        </div>
      </div>
    )
  }
 
  _updateSearchText = (text) => {
    console.log(text)
    this.setState({searchText: text})
  }

  _selectSearchBox = (event) => {
    this.setState({ searchBox: !this.state.searchBox, mapBox: false })
  }

    _selectMapBox = (event) => {
    this.setState({ mapBox: !this.state.mapBox, searchBox: false })
  }

}

export default AllMpView;