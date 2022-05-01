import React, { useEffect, useState } from 'react'
import { API_KEY, imgUrl } from '../../Constants/Constants'
import axios from "../../Axios/Axios";
import './Row.css'
import YouTube from 'react-youtube';

import { Link } from 'react-router-dom';

function Row(props) {
  const [post, setPost] = useState([])
  const [movieId, setMovieId] = useState('');
  console.log(movieId.key)

  useEffect(() => {

    axios.get(props.url).then((responce) => {

      setPost(responce.data.results)
      console.log(responce.data.results)



    })
    axios.get(`/movie/158916/videos?api_key=${API_KEY}&language=en-US`).then(responce => {



      if (responce.data.results.length !== 0) {

        setMovieId(responce.data.results[0])
        console.log(responce.data)
      }
      else {
        console.log("Array empty")
        console.log(responce.data)
      }

    })

  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className='Row'>
      <div><h3>{props.title}</h3></div>
      <div className="Poster">{
        post && post.map((post, index) => {
          return (<div className='movie'>

            <div className='imageconatiner'><Link to={`/detail/` + post.id} onClick={() => { window.location.href = `/detail/` + post.id }} ><img src={`${imgUrl + post.backdrop_path}`} alt="hi" className='ImagePoster'></img></Link></div>
           
            <div className='movie-Content'>
              {/* <p>
              <iframe width="100%" height="100%" src="//www.youtube.com/embed/1mTjfMFyPi8?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media"></iframe></p> */}
              <p>{post.original_title}</p>
              <p>{post.overview}</p>
              <p>{post.release_date}</p>


              {/* <p><video width="180" height="100" controls autoPlay={true} loop={true} playsInline={true}>
                <source src="https://www.youtube.com/watch?v=1mTjfMFyPi8" type="video/mp4"></source>
                </video></p> */}
            </div>
          </div>
          )
        })}


      </div>
    </div>
  )
}

export default Row