import React from 'react'
import ImageSlider from '../Banner/ImageSlider'



import Row from '../Row/Row'
import {  Animation, Comedy, Crime,Fantasy,TVMovie } from '../Url/url'
import './channel.css'

function Channels() {
  return (
    <div className='channel'>
       <ImageSlider url={Fantasy}/>
    <Row url={Animation} title="Animation"/>
    <Row url={TVMovie} title="TV Movie"/>
    <Row url={Comedy} title="comedy"/>
    <Row url={Crime} title="Crime"/>
    </div>
  )
}

export default Channels