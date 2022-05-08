import React, { useEffect, useState } from 'react'
import './MovieDetailes.css'
import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom";
import axios from "../../Axios/Axios";
import { API_KEY, imgUrl } from "../../Constants/Constants";


function MovieDetailes() {
    const [detailData, setDetailData] = useState({})
    const [play,setPlay]=useState(true)
    const [detail, setDetail] = useState();
    const [movieId, setMovieId] = useState('');
    const { id } = useParams()
    console.log(movieId.key)
    const url = `https://www.youtube.com/embed/${movieId.key}?controls=0`;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dbe5adb7b4096d71bdc4a2063260ca95&language=en-US`).then((responce) => {

            setDetail(responce.data)




        })
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(responce => {



            if (responce.data.results.length !== 0) {

                setMovieId(responce.data.results[0])
                console.log(responce.data.key)
            }
            else {
                console.log("Array empty")
                console.log(responce.data)
            }

        })

    }, [id])
    return (
        <div className='Container'><div className='Background'>
            <img alt={detailData.title} src={detail && `${imgUrl + detail.backdrop_path}`} className="Backgroundimg" />
        </div>
            <div className='ImageTitle'>
                <ReactPlayer url={url} playing={false}  controls={false}  />

            </div>
            <div className="ContentMett">
                <div className="Controls">
                    <button className="Player">
                        <img src="/images/play-icon-black.png" alt="" />
                        <span onClick={()=>{setPlay(!play)}}>Play</span>
                    </button>
                    <button  className="Player">
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </button>
                    <div className="AddList">
                        <span />
                        <span />
                    </div>
                    <div className="GroupWatch">
                        <div>
                            <img src="/images/group-icon.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="SubTitle">
                {detail &&detail.original_title}
                </div>
                <div className="Description">
                {detail &&detail.overview}
                </div>
            </div>
        </div>
    )
}

export default MovieDetailes