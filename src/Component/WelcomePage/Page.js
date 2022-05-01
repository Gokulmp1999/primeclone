import React from 'react'
import './Page.css'

function Page() {
  return (
    <div className='Container'> <div className='Containercontent' >
      <div className='right'>
      <h1 className='title'>Welcome to Prime Video</h1>
      <p className='description'>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
      <div className="buttons">
        <button class="button-15" role="button" style={{ margin: '10px 0px' }}>Annual Prime at ₹1499</button>
        <h6 style={{ margin: '10px 0px',}}>With all electronic payment methods</h6>
        <button class="button-15" role="button" style={{ margin: '10px 0px'}}>3 months Prime at ₹459</button>
        <h6 style={{ margin: '10px 0px' }}>With all electronic payment methods</h6>
        <button class="button-15" role="button" style={{ margin: '10px 0px'}}>Monthly Prime at ₹179</button>
        <h6 style={{ margin: '10px 0px' }}>With select credit or debit cards</h6>

      </div>
      </div>
     
    </div>
      <div className='Containerimage'>
        <div className="imgWrapper">
          <img className='Image' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Page