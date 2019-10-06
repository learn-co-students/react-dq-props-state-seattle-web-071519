import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from 'constants'
// import offspring from './db.js'

export default class MasterHog extends Component {

  constructor() {
    super()
    this.state = {
      eyeColor: "blue",
      babies: [
        {
          name: "Katana",
          weight: 113,
          hobby: "being kawaii"
        },
        {
          name: "Stanley",
          weight: 145,
          hobby: "league of legends"
        },
        {
          name: "Scately",
          weight: 2600,
          hobby: "watching animal porn"
        }
      ]
    }
  }


  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    })
  }

  renderBabyHogs = () => {
    return this.state.babies.map((baby) => <BabyHog baby={baby} eyeColor={this.state.eyeColor}/>)
  }

  render() {
    return (
      <div>

        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>
      
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        
        <ul className="hoglist">
          {this.renderBabyHogs()}
        </ul>

      </div>
    )
  }

}
