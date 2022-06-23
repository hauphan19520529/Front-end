import React, {useState} from 'react';
import * as cal from './DanhSachGame'
import contact from './contacts'
var lp = window.location.pathname.slice(1)

function SearchGame(){
  var [timgame, setTimgame] = useState("")
function CreateCard(contact) {
  if(contact.name == timgame)
    return (
      <cal.default 
      id = {contact.id}
      image = {contact.image}
      name = {contact.name}
      ngayph = {contact.ngayph.toString()}
      theloai = {contact.theloai}
      solike = {contact.solike}
      sodislike = {contact.sodislike}
      socmt = {contact.socmt}
      gia = {contact.gia}
       />
    )
}
function Doichu(event) {
    const ttt = event.target.value
    setTimgame(ttt)
}
function Taothez() {
    return (
      <div>
        <input name = "tengame" onChange={Doichu}></input>
        <div className = "cacgame">
        {contact.map(CreateCard)}
        </div>
      </div>
    )
  }
  return Taothez()
}
  export default SearchGame;