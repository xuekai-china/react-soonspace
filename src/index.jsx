import React, { Component } from 'react'
import SoonSpace from 'soonspacejs'

export default class ReactSoonspace extends Component {
  constructor() {
    super()

    this.state = {
      defaultStyle: {
        position: 'relative',
        width: '100%',
        height: '100%'
      }
    }
  }

  componentDidMount() {
    this.initScene()
  }

  initScene() {
    const {
      option,
      skyBackground,
      modelClick,
      modelDblClick,
      modelHover,
      poiClick,
      poiDblClick,
      poiHover,
      selectPosition,
      sceneReady
    } = this.props

    const ssp = new SoonSpace({
      el: '#view',
      option: Object.assign({
        showInfo: false
      }, option),
      events: {
        modelClick: param => {
          modelClick &&  modelClick(param)
        },
        modelDblClick: param => {
          modelDblClick && modelDblClick(param)
        },
        modelHover: param => {
          modelHover && modelHover(param)
        },
        poiClick: poi => {
          modelHover && poiClick(poi)
        },
        poiDblClick: poi => {
          poiDblClick && poiDblClick(poi)
        },
        poiHover: poi => {
          poiDblClick && poiHover(poi)
        },
        selectPosition: position => {
          selectPosition && selectPosition(position)
        }
      }
    })

    if (skyBackground) {
      const { dirPath, fileNames } = skyBackground

      ssp.setSkyBackground(dirPath, fileNames)
    }

    sceneReady && sceneReady(ssp)
  }

  render() {

    const { customStyle, customClass } = this.props
    const { defaultStyle } = this.state
    const style = Object.assign(defaultStyle, customStyle)

    return (
      <div
        id="view"
        className={customClass}
        style={style}
      ></div>
    )
  }
}
