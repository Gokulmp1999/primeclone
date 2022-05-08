import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "../../Axios/Axios";
import { imgUrl } from "../../Constants/Constants";



const ImageSlider = (props) => {
  const [banner,setBanner]=useState([])
 
  useEffect(()=>{
  
      axios.get(props.url).then((responce)=>{
        
        setBanner(responce.data.results)
        
  
       
      })
      
    },[])


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  
  return (
    <Carousel {...settings} >
      {banner.map((movie)=>
       
         <Wrap >
         <a>
           <img src={`${imgUrl+movie.backdrop_path}`} alt="gggggg" />
         </a>
       </Wrap>
      )}
     
      
    </Carousel>
  )
}
const Carousel = styled(Slider)`

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
   ul li button {
    &:before {
      
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before{
    color:white
  }
  .slick-list {
    overflow: hidden;
  }

  .slick-prev {
   
  }
  .slick-next {
    
  }
  .slick-dots{
    position: absolute;
    bottom: 20px;
    @media (max-width: 768px) {
    opacity:-1
    }
    
  }
`
const Wrap=styled.div`
border-radius: 4px;
  cursor: pointer;
  position: relative;
  
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
     img {
      width: 100%;
      height: 400px;
      
      object-fit: cover;
      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
      }
    }
    
    
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }`
export default ImageSlider