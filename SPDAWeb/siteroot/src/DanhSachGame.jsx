import React, {useState} from 'react';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import {  BrowserRouter as Router,Route, Routes, Link, useParams, Navigate} from 'react-router-dom'
import moment from 'moment';


function Cardz(propz) {
  var hinh = propz.image
  var dan = "/" + propz.name //tạo dường link giống với tên của game
  var [likepressed, setLikepressed] = useState(0)
  var [dislikepressed, setDislikepressed] = useState(0)
  var [likes, setLikes] = useState(likes = propz.solike)
  var [dislikes, setDislikes] = useState(dislikes = propz.sodislike)
  var [i, setI] = useState((likes * 100) / (likes + dislikes))
  var kieu1 = {
    color: "black",
  }
  var kieu2 = {
    color: "rgb(11, 129, 240)"
  }
  var kieu3 = {
    color: "red"
  }
  
  var [kieulike, setKieulike] = useState(kieu1)
  var [kieudislike, setKieudislike] = useState(kieu1)
 
  function TangLike() {
    if(likepressed == 0) {
      setKieulike(kieu2)
      if(dislikepressed == 1) {
          setKieudislike(kieu1)
          setDislikes(--dislikes) 
          setI((likes * 100) / (likes + dislikes))
          setDislikepressed(0)
      } 
      setLikes(++likes)
      setI((likes * 100) / (likes + dislikes))
      setLikepressed(1)
      }
      else if (likepressed == 1) { 
      setKieulike(kieu1)     
      setLikes(--likes) 
      setI((likes * 100) / (likes + dislikes))
      setLikepressed(0)
      }
  }
  function TangDislike() {
      if(dislikepressed == 0) {
      setKieudislike(kieu3)
      if(likepressed == 1) {
          setKieulike(kieu1)
          setLikes(--likes) 
          setI((likes * 100) / (likes + dislikes))
          setLikepressed(0)
      }
      setDislikes(++dislikes) 
      setI((likes * 100) / (likes + dislikes))
      setDislikepressed(1)
      }
      else if (dislikepressed == 1) {
      setKieudislike(kieu1)
      setDislikes(--dislikes) 
      setI((likes * 100) / (likes + dislikes))
      setDislikepressed(0)
      }
  }
 return (
   //dưới dây là html của 1 ô game trong trang thể loại
   //thẻ link để chuyển đến trang có URL là localhost:3000/dan 
      <div className = "game">
      <Link to = {dan} onClick = {window.location.reload} className = "dsgame">
      <img className = "anhtieudegame" src={propz.image} />
      </Link>
      <div className="thanduoi">
      <h3 className = "tuagame">{propz.name}</h3>
      <label for="nph" className='ngayphathanh'>Ngày phát hành: </label><span id ="nph" className = "ngayphathanh">{moment(propz.ngayph).format('DD/MM/YYYY')}</span><br />
      <label for="theloai">Thể loại: </label><span id = "theloai" className = "theloai">{propz.theloai}</span>
      <div className = "danhgia">
          <div className = "starz">

              <div className = "progressnone">
                <div id = "progress" style = {{width: i + "%"}}></div>
              </div>
              <div className = "progressnen"></div>             
              <FontAwesomeIcon className = "ngoisao" icon = {faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className = "ngoisao" icon = {faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className = "ngoisao" icon = {faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className = "ngoisao" icon = {faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className = "ngoisao" icon = {faStar}></FontAwesomeIcon>
          </div>
          <div className = "tuongtac">
          <FontAwesomeIcon  icon = {faThumbsUp}  onClick={TangLike} style={kieulike}></FontAwesomeIcon>
          <div className = "solike" id = "hienlike">{likes}</div>
          <FontAwesomeIcon  icon = {faThumbsDown} onClick={TangDislike} style={kieudislike}></FontAwesomeIcon>
          <div className = "sodislike">{dislikes}</div>
          <FontAwesomeIcon  icon = {faComment}></FontAwesomeIcon>
          <div className = "socmt">{propz.socmt}</div>
          </div>
      </div>
      </div>
  </div>
  
    )
  }
  export default Cardz;
  