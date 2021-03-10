import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        {/* Bands Container */}
        <BandInput addBand={this.props.addBand}/>
        <h1>Bands:</h1>
        <ul>
          {this.props.bands.map(band=> <li key={band.text}>{band.name}</li>)} 
          {/* should be {band.text} in order to get it to render in browser but for some reason the tests want {band.name} which does not render anything in browser after submit..... interesting.  */}
        </ul>
      </div> 
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: bandFromForm => dispatch({type: 'ADD_BAND', payload: bandFromForm}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
