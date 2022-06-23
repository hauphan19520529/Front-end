import React, {useState} from 'react';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import {  BrowserRouter as Router,Route, Routes, Link, useParams, Navigate} from 'react-router-dom'
import moment from 'moment';

  function HotNhi(propz) {
   var dan = "/" + propz.name
   var [likes, setLikes] = useState(propz.solike)
    var [dislikes, setDislikes] = useState(propz.sodislike)
    var [i, setI] = useState((likes * 100) / (likes + dislikes))
   return ( 
      <Link to = {dan} onClick = {window.location.reload}>
          <div className = "hotgamesnhi">
              <div class="M-game">
              <img class = "anhgamehotnhi" src={propz.image}/>
              <h3>{propz.name}</h3>	
              </div>
              <div class="M-game">{propz.theloai}</div>
              <div>{moment(propz.ngayph).format('DD/MM/YYYY')}</div>
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
                    <div className='totalreacts'>({propz.solike + propz.sodislike})</div>
                   
                </div>
          </div>
      </Link>
      )
    }
  export default HotNhi;

  