import React, { useState } from 'react'
import YouTube from 'react-youtube';

function Video() {
  const [c,setc]=useState(true)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    // <div><p><video width="320" height="240" controls autoPlay={true} loop={true} playsInline={true}> 
    // <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4"></source>
    // </video></p></div>
    <div style={{height:"100%",width:"100%"}}>
      
     {c? <YouTube  opts={opts} videoId="1mTjfMFyPi8" /> :''}
    </div>

  )
}

export default Video