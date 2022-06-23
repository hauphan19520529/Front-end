import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import contact from "./contacts";
import Taoanhtren from "./taoasnav";
import { Taoanhduoi } from "./taoasnav";
import {  BrowserRouter as Router,Route, Routes, Link, useParams, Navigate} from 'react-router-dom'

var lp = window.location.pathname.slice(1)
lp = lp.replace(/%20/g, " ")
function Imslide() {
  const [slidenum, setSlidenum] = useState(0)
function createCardz(contact) {
  if (contact.name == lp)
  return contact.hinh.map(createCardzz)
}
function createCardzz(hinh) {
  return (
   <Taoanhtren 
    hinh = {hinh}
   />
  )
}

function createCardzzz(contact) {
  if (contact.name == lp){
  return contact.hinh.map(createCardzzzz)
  }
}
function createCardzzzz(hinh) {
  if(hinh == 1) setSlidenum(1)
  if(hinh == 2) setSlidenum(2)
  if(hinh >= 3 ) setSlidenum(3)
  return (
   <Taoanhduoi
    hinh = {hinh}
   />
  )
}

class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className = "slide">
        <Slider 
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
         {contact.map(createCardz)}
        </Slider>
        <Slider 
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={slidenum}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {contact.map(createCardzzz)}
        </Slider>
      </div>
    );
  }
}
return <AsNavFor />
}

function GameTuongTu(propz) {
function CacGameTuongTu(contact) {
  var dan = "/" + contact.name
  return (
    <Link to = {dan} onClick = {window.location.reload} style={{color: "black"}}>
    <div className="thanhgtt">
    <img className="gtt" src = {contact.image}/>
    <div className="tengtt" id = "gamettu">{contact.name}</div>
    </div>
    </Link>
  )
}


function createCardzzzz(contact) {
  if(contact.theloai == propz.theloai)
  return (
   <CacGameTuongTu
    image = {contact.image}
    name = {contact.name}
   />
  )
}

class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className = "slidegtt">
        <Slider 
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow= {3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {contact.map(createCardzzzz)}
        </Slider>
      </div>
    );
  }
}
return <AsNavFor />
}

export default Imslide
export {GameTuongTu}