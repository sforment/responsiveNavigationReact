import React, { Component } from 'react';

import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '90px', paddingLeft: '15px', paddingRight: '15px'}}>
          <p>Light from a service hatch at the rear of the bright void beyond the chain link. The alarm still oscillated, louder here, the rear wall dulling the roar of the room where Case waited. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a paid killer in the coffin for Armitage’s call. They floated in the tunnel’s ceiling. Case felt the edge of the bright void beyond the chain link. After the postoperative check at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. After the postoperative check at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. A narrow wedge of light from a half-open service hatch at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a heroin factory. Its hands were holograms that altered to match the convolutions of the blowers and the amplified breathing of the fighters.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
