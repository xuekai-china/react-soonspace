import React from 'react';
import ReactSoonspace from 'react-soonspace';
import './App.css';

export default class App extends React.Component {

  sceneReady(ssp) {
    console.log(ssp)

    ssp.createGround({
      imgUrl: 'https://unpkg.com/soonspacejs-demo-model/img/ground/001.jpg',
      width: 500,
      height: 300,
      position: { x: 0, y: 0, z: 0 }
    })
  }

  selectPosition(position) {
    console.log(position)
  }

  render() {

    return (
      <div className="App">
        <ReactSoonspace
          customClass='soonspace-view'
          option={{
            showInfo: false,
            backgroundColor: 0x333300
          }}
          sceneReady={this.sceneReady}
          selectPosition={this.selectPosition}
        />
      </div>
    )

  }

}
