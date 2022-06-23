import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import GameCuThe from './TrangCuaMotGameCuThe';
import contact from './contacts'
import moment from 'moment';
var lp = window.location.pathname.slice(1)
lp = lp.replace(/%20/g, " ")
function createCardz(contact) {
    if(contact.name == lp)
    return (
      <GameCuThe
      id = {contact.id}
      image = {contact.image}
      name = {contact.name}
      ngayph = {moment(contact.ngayph).format('DD/MM/YYYY')}
      nhaph = {contact.nhaph}
      nhaxb = {contact.nhaxb}
      theloai = {contact.theloai}
      solike = {contact.solike}
      sodislike = {contact.sodislike}
      socmt = {contact.socmt}
      noidung = {contact.noidung}
      minimum = {contact.minimum}
      recommended = {contact.recommended}
      gia = {contact.gia}
      link = {contact.link}
       />
    )
}
  function Xam() {
    var x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundImage = "url('')"
    x.style.backgroundColor = "#eef1f3"
    return (
        <div className = "thegame">
        {contact.map(createCardz)}
        </div>
    )
  }


export default Xam