import React from 'react'
import ImageSlider from '../Banner/ImageSlider'



import Row from '../Row/Row'
import { action, HorrorMovies, orginal,Trending } from '../Url/url'
import './Store.css'

function Store() {
  return (
    <div className='store'>
      <ImageSlider url={Trending}/>
    <Row url={Trending} title="Store New release movies"/>
    <Row url={orginal} title="Orginal"/>
    <Row url={action} title="Action"/>
    <Row url={HorrorMovies} title="Horror Movies"/>
    </div>
  )
}

export default Store