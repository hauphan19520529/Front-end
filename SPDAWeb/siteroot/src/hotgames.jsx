import React, {useState} from 'react';
import HotNhi from './TrangHotGames';
import contact from './contacts'
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import {  BrowserRouter as Router,Route, Routes, Link, useParams, Navigate} from 'react-router-dom'
import moment from 'moment';

function Hotgame(){
  function Hott(propz) {
 var dan = "/" + propz.name
 var [likepressed, setLikepressed] = useState(0)
 var [dislikepressed, setDislikepressed] = useState(0)
 var [likes, setLikes] = useState(propz.solike)
 var [dislikes, setDislikes] = useState(propz.sodislike)
 var [i, setI] = useState((likes * 100) / (likes + dislikes))
 function TangLike() {
  var element = document.getElementById("uplike");
  element.classList.toggle("like-pressed");
  if(likepressed == 0) {
  if(dislikepressed == 1) {
      var element = document.getElementById("downlike");
      element.classList.toggle("dislike-pressed");
      setDislikes(--dislikes) 
      setI((likes * 100) / (likes + dislikes))
      setDislikepressed(0)
  } 
  setLikes(++likes) 
  setI((likes * 100) / (likes + dislikes))
  setLikepressed(1)
  }
  else if (likepressed == 1) {      
  setLikes(--likes) 
  setI((likes * 100) / (likes + dislikes))
  setLikepressed(0)
  }
}
function TangDislike() {
  var element = document.getElementById("downlike");
  element.classList.toggle("dislike-pressed");
  if(dislikepressed == 0) {
  if(likepressed == 1) {
      var element = document.getElementById("uplike");
      element.classList.toggle("like-pressed");
      setLikes(--likes) 
      setI((likes * 100) / (likes + dislikes))
      setLikepressed(0)
  }
  setDislikes(++dislikes) 
  setI((likes * 100) / (likes + dislikes))
  setDislikepressed(1)
  }
  else if (dislikepressed == 1) {
  setDislikes(--dislikes) 
  setI((likes * 100) / (likes + dislikes))
  setDislikepressed(0)
  }
}
 return ( 
   <div className = "hotgames">
          <Link to = {dan} onClick = {window.location.reload} className='bestt'>
	        <div class="M-game">
	        <img class = "anhgamehotnhat" src={propz.image}/>
	        <h3>{propz.name}</h3>	
	        </div>
	        <div class="M-game">{propz.theloai}</div>
            <div>{moment(propz.ngayph).format('DD/MM/YYYY')}</div>
            </Link>
            <div class="thongtinsobo" id = "ttsobo">
                    <div className = "starzzx">
                    <div className = "progressnonez">
                        <div id = "progressz" style = {{width: i + "%"}}></div>
                    </div> 
                    <div className = "progressnenblack"></div>           
                        <FontAwesomeIcon className = "ngoisaoz" icon = {faStar} />
                        <FontAwesomeIcon className = "ngoisaoz" icon = {faStar} />
                        <FontAwesomeIcon className = "ngoisaoz" icon = {faStar} />
                        <FontAwesomeIcon className = "ngoisaoz" icon = {faStar} />
                        <FontAwesomeIcon className = "ngoisaoz" icon = {faStar} />
                    </div>
                    <div className='totalreacts'>({likes + dislikes})</div>
                    <div className = "tuongtaczx">
                        <FontAwesomeIcon  icon = {faThumbsUp}  id = "uplike" onClick={TangLike}></FontAwesomeIcon>
                        <div className = "solike">{likes}</div>
                        <FontAwesomeIcon  icon = {faThumbsDown}   id = "downlike" onClick={TangDislike}></FontAwesomeIcon>
                        <div className = "sodislike">{dislikes}</div>
                        <FontAwesomeIcon  icon = {faComment}></FontAwesomeIcon>
                        <div className = "socmt">{propz.socmt}</div>
                    </div>
                </div>
	        <p>
                {propz.thumbnail}
            </p>
        </div>
    )
 }
function createCard(contact) {
    return (
      <Hott
      id = {contact.id}
      image = {contact.image}
      name = {contact.name}
      ngayph = {contact.ngayph}
      theloai = {contact.theloai}
      solike = {contact.solike}
      sodislike = {contact.sodislike}
      socmt = {contact.socmt}
      thumbnail = {contact.thumbnail}
       />
    )
}
function Hotgamez() { 
  return (
    <div>
      <div className = "cacgamehot">
      {contact.slice(0,1).map(createCard)}
      </div>
    </div>
  )
}
return Hotgamez()
}
function createCardz(contact) {
  return (
    <HotNhi 
    id = {contact.id}
    image = {contact.image}
    name = {contact.name}
    ngayph = {contact.ngayph}
    theloai = {contact.theloai}
    solike = {contact.solike}
    sodislike = {contact.sodislike}
    socmt = {contact.socmt}
    />
    )
  }
  


  function Hotgamesnhi() { 
    return (
        <div className = "cacgamehotnhi">
        {contact.slice(1,4).map(createCardz)}
        </div>
    )
  }


  export default Hotgame;
  export {Hotgamesnhi}