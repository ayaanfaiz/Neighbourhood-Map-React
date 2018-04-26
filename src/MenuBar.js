import { SideNav, SideNavItem, Button, Icon } from 'react-materialize';
import React, { Component } from 'react';
import MapContainer from './MapContainer'
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
} from "google-maps-react";

class MenuBar extends Component {
  render() {
    return(
      <div>
        <SideNav
        trigger={<Button floating large className='red' style={{marginTop:`6%`, marginLeft:`2%`}}><Icon>menu</Icon></Button>}
        options={{ closeOnClick: true }}
        >

        <SideNavItem userView
        user={{
        background: 'img/office.jpg',
        image: '././img/ayaan.png',
        name: 'Ayaan Faiz',
        email: 'ayaan2103@gmail.com'
        }}
        />
        <SideNavItem
          icon='business'
          onClick={this.props.onMarkerClick}
        >
        New York City Center</SideNavItem>
        <SideNavItem divider />
        <SideNavItem href='#!second' icon='photo_size_select_actual'>The Museum of Modern Art</SideNavItem>
        <SideNavItem divider />
        <SideNavItem href='#!icon' icon='local_bar'>The Monkey Bar</SideNavItem>
        <SideNavItem divider />
        <SideNavItem href='#!icon' icon='local_dining'>Barnes & Noble</SideNavItem>
        <SideNavItem divider />
        <SideNavItem href='#!icon' icon='local_cafe'>Hard Rock Cafe</SideNavItem>
        <SideNavItem divider />
        <SideNavItem href='#!icon' icon='videogame_asset'>PlayStation Theater</SideNavItem>
        <SideNavItem divider />

        </SideNav>
      </div>
    )
  }
}

export default MenuBar;
