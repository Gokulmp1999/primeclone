import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactPlayer from 'react-player'

import axios from "../../Axios/Axios";
import { API_KEY, imgUrl } from "../../Constants/Constants";


const Detail = () => {
  const [detailData,setDetailData]=useState({})
  const [detail,setDetail]=useState();
  const [movieId, setMovieId] = useState('');
  const { id } = useParams();
  console.log(movieId.key)
  const url=`https://www.youtube.com/embed/${movieId.key}?controls=0`;
 
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dbe5adb7b4096d71bdc4a2063260ca95&language=en-US`).then((responce)=>{
          
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
     
  },[id])
  
  return (
    <Container>
      
      <Background>
        <img alt={detailData.title} src={detail&&`${imgUrl+detail.backdrop_path}`} />
     
      </Background>
      
      <ReactPlayer url={url} playing={true} controls={false} width />
      <ContentMeta>
      <Controls>
        <Player>
          <img src="/images/play-icon-black.png" alt="" />
          <span onClick={onplay}>Play</span>
        </Player>
        <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
          </Controls>
          <SubTitle>{detail &&detail.original_title}</SubTitle>
        <Description>{detail &&detail.overview}</Description>
      </ContentMeta>
    </Container>
  )
}
const Container = styled.div`
position: relative;
margin-top: 71px;
     
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);`
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: 100vw;
      height: calc(100vh-80px);
       object-fit: cover;
       
    }
  }`
const ImageTitle = styled.div`
  align-items: center;
  
  display: block;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 102vh;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  ReactPlayer{
  
  }
  @media screen and (max-width: 700px) {
    height: 300px;
    width:100px;
   
    
   
  }
  
  img{
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }

  `
const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;
const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;