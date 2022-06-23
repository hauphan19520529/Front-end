import React, {useState} from 'react';
import * as cal from './Heading'

function ThePeople () {
    const [inputText, setInputText] = useState({
        id: " ",
        name: " ",
        tel: " ",
        email: " "
      });
    
    const [items, setItems] = useState([]);

    function addingPerson (event) {
        const {value, name} = event.target
        setInputText(prevValue => {
          return {
            ...prevValue,
            [name]: value
          }
        })
      }
      //hàm khi nhấn nút ADD
    function addButtonClicked () {
    setItems(prevItems => {
        return [...prevItems, inputText]
    })
    };
    return (
        <div>
            <form>
              <div class = "thantren">
              <input id = "NhapID" onChange = {addingPerson} placeholder = "Nhập id" type = "text" name = "id"  value = {items.id}/><br></br>
              <input id = "NhapTen" onChange = {addingPerson} placeholder = "Nhập tên" type = "text" name = "name"  value = {items.name}/><br></br>
              <input id = "NhapSDT" onChange = {addingPerson} placeholder = "Nhập sđt" type = "text" name = "tel" value = {items.tel}/><br></br>
              <input id = "NhapEmail" onChange = {addingPerson} placeholder = "Nhập email" type = "text" name = "email" value = {items.email}/>  <br></br>        
              <button type = "button" onClick = {addButtonClicked} id = "NutThemNguoi">ADD</button>
              </div>
              <div class = "thanduoi">
                 {items.map(heading => {
                  return (
                  <cal.default 
                  id = {heading.id}
                  name = {heading.name}
                  tel = {heading.tel}
                  email = {heading.email} />
                  )
               })}
              </div>           
            </form>
        </div>
        )
}
export default ThePeople