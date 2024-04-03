import React, { Component } from 'react'




export class Country extends Component {

   
    
    changeToUS=()=>{
        this.setState='us'
    }
     
     changeToIndia=()=>{
        this.setState='in'
    }

  render() {
    return (
    <>
    <div className='d-flex justify-content-around'>
 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={this.changeToUS}/>
  <label class="form-check-label" for="flexRadioDefault1">United States
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={this.changeToIndia}/>
  <label class="form-check-label" for="flexRadioDefault2">India
  </label>
</div>
</div>
    </>
    )
  }
}

export default Country