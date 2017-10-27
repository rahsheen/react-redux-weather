import React, { Component } from 'react'

export default class GoogleMap extends Component {
  componentDidMount () {
    const map = new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render () {
    // this.refs.map
    return <div ref='map' />
  }
}
