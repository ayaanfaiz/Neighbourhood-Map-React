import React, { Component } from 'react';

const API = 'https://api.foursquare.com/v2/venues/'
const AuthURL = '?&client_id=OQDS4CPELU4LLHPFADU1CQRMF0WPCH2APOUQBFAOLBW1AQQZ&client_secret=0XWNSR4AHOD5IRHPW0DC3BNT1TMARJCQAYL34ZVMYESS1Q1D&v=20180423'

class Info extends Component {

  state = {
    response: []
  }

  compnentDidMount(){
    fetch(API + this.props.venue + AuthURL)
      .then(response => response.json())
      .then(data => this.setState({ response: data.response.venue}))
  }


  render(){
    return(
      
      <div>
      hi
      </div>
    )
  }

}
export default Info;
