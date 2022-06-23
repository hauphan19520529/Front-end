import React, {useState} from 'react';
import * as cal from './DanhSachGame'
import contact from './contacts'
import $ from 'jquery'
import {  } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { faStar } from "@fortawesome/free-regular-svg-icons"
import {  BrowserRouter as Router,Route, Routes, Link, useParams, Navigate} from 'react-router-dom'
import moment from 'moment';
var lp = window.location.pathname.slice(1)

function Taothe(){
  var [timgame, setTimgame] = useState("")
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
            <FontAwesomeIcon  icon = {faThumbsUp}  onClick={TangLike} style={kieulike} id = "uplike"></FontAwesomeIcon>
            <div className = "solike" id = "hienlike">{likes}</div>
            <FontAwesomeIcon  icon = {faThumbsDown} onClick={TangDislike} style={kieudislike} id = "downlike"></FontAwesomeIcon>
            <div className = "sodislike">{dislikes}</div>
            <FontAwesomeIcon  icon = {faComment}></FontAwesomeIcon>
            <div className = "socmt">{propz.socmt}</div>
            </div>
        </div>
        </div>
    </div>
    
      )
    }
function CreateCard(contact) {
    var theloaii = contact.theloai;
    theloaii = theloaii.replace(/ /g, "");
    theloaii = theloaii.replace(/ị/g, "i");
    theloaii = theloaii.replace(/ể/g, "e");
    theloaii = theloaii.replace(/ả/g, "a");
    theloaii = theloaii.replace(/đ/g, "d");
    theloaii = theloaii.replace(/ố/g, "o");
    if(timgame == "") {
    if(lp == theloaii)
    return (
      <Cardz 
      id = {contact.id}
      image = {contact.image}
      name = {contact.name}
      ngayph = {contact.ngayph.toString()}
      theloai = {contact.theloai}
      solike = {contact.solike}
      sodislike = {contact.sodislike}
      socmt = {contact.socmt}
       />
    )
    }
    else {
      if(timgame != "" && contact.name.toLowerCase().includes(timgame.toLowerCase()) == true && lp == theloaii)
    return (
      <Cardz
      id = {contact.id}
      image = {contact.image}
      name = {contact.name}
      ngayph = {contact.ngayph.toString()}
      theloai = {contact.theloai}
      solike = {contact.solike}
      sodislike = {contact.sodislike}
      socmt = {contact.socmt}
       />
    )
    }
}
function Doichu(event) {
    const ttt = event.target.value
    setTimgame(ttt)
}
function Taothez() {
    var [choose, setChoose] = useState(0)
    //Hàm Jquery này sẽ được trigger khi click vào một thẻ option bên dưới, lấy ra giá trị (value) của option đó và gán cho biến choose
    $( document ).ready(function() {   
      $('.boloc').on('change', function() {
        var value = $(this).val();
        setChoose(value)// gán giá trị của value cho choose
    
      });  
    });
    function anhien() {
      var x = document.getElementById("lup");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    //sắp xếp lại mảng contact theo choose tương ứng để hiển thị theo thứ tự user mong muốn
    if(choose == 0) contact.sort(function(a, b){return b.ngayph - a.ngayph})
    else if(choose == 1) contact.sort(function(a, b){return a.ngayph - b.ngayph})
    else if(choose == 2) contact.sort(function(a, b){return b.solike - a.solike})
    else contact.sort(function(a, b){return b.sodislike - a.sodislike})
    return (
      <div>
        <div className='kinhlup' onClick={anhien}><FontAwesomeIcon icon = {faSearch}></FontAwesomeIcon></div>
        <input style={{display: "none"}} id= "lup" name = "tengame" className='thanhtimkiem' placeholder='Nhập tên game bạn muốn tìm' onChange={Doichu}></input>
        <div style={{height: "1px"}}></div>
        <select className='boloc'>
          <option value = "0">Mới nhất</option>
          <option value = "1">Cũ nhất</option>
          <option value = "2">Nhiều like nhất</option>
          <option value = "3">Nhiều dislike nhất</option>
        </select>
        <div className = "cacgame">
        {contact.map(CreateCard)}
        </div>
      </div>
    )
  }
  return Taothez()
}
  export default Taothe;