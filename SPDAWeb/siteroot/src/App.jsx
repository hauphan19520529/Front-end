import React, {useState} from 'react';
import Xam from './TaoTrangCua1GameCuThe'
import Taothe from './TaoDanhSachGame'
import Hotgame, {Hotgamesnhi} from './hotgames';
import * as cal from './DanhSachGame'
import TrangGioiThieu from './TrangGioiThieu';
import TrangDangKi from './TrangDangKi';
import TrangDangNhap from './TrangDangNhap';
import TrangGopY from './TrangGopY';
import {  BrowserRouter as Router,Route, Routes, Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import contact from './contacts';
import $, { event } from 'jquery'
import './css/Trangchu.css'
import './css/grid.css'
import './css/repponsive.css'
import './css/style.css'
import './css/style2.css'
import './css/App.css'
import './css/css_dangki.css'
import './css/css_gioi-thieu.css'


var ccc = window.location.pathname
function Home(){
	var [coSearchko, setCoSearchko] = useState(0)
	function Homez() {
		var [timgame, setTimgame] = useState("")
		  $( document ).ready(function() {   
			  $(".kinhlup").click(function(){ //phần code khi click vào kính lúp
				$('.thanhtimkiem').toggle();//hiện thanh tìm kiếm ở dưới thanh nav
				$('.thanhsearch').toggle();// ẩn thanh tìm kiếm to ở dưới trong trang chủ 		  
			  });
			});
		function Doichu(event) { //hàm Doichu để thực thi các lệnh mỗi khi nhập vào thanh search 1 chữ mới
			setTimgame(event.target.value)
			$( document ).ready(function() {
				$(".body-content").hide()// ẩn tất cả khi có chữ trong thanh search, chỉ chừa lại thanh search cho mình nhập vào
				$(".footer").hide()//ẩn footer
				$("#top-header").hide()
				$('.kinhlup').hide()
			  });
			if(event.target.value == "") {
				$( document ).ready(function() {
					$(".body-content").show()
					$(".footer").show()
					$("#top-header").show()
					$('.kinhlup').show()
				  });
			}
		}
		function CreateCard(contact) {
			if(timgame != "" && contact.name.toLowerCase().includes(timgame.toLowerCase()) == true)
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
				/>
			  )
			  }
	const [hotornew, setBien] = useState(0)
	if (hotornew == 0) contact.sort(function(a, b){return (b.solike + b.sodislike) - (a.solike + a.sodislike)})
	else contact.sort(function(a, b){return b.ngayph - a.ngayph})
	return (
		<div>
		<div className='kinhlup'><FontAwesomeIcon icon = {faSearch}></FontAwesomeIcon></div>
        <input style={{display: "none"}} name = "tengame" className='thanhtimkiem' placeholder='Nhập tên game bạn muốn tìm' onChange={Doichu}></input>
		<div class="table">
  			<img src="/img/games-header-1.png" id="top-header" />
		    <input className='thanhsearch' onChange={Doichu} placeholder='Nhập tên game bạn muốn tìm'></input>
		  	
			<div class="body-content"> 
					<button class="content-btn" onClick={() => setBien(0)}>Game Hot</button>
					<button class="content-btn" onClick={() => setBien(1)}>Game mới</button>
				<div className = "mucgamehot">
					<Hotgame />
					<Hotgamesnhi />	
				</div>
			</div>
		</div>
		<div className = "cacgame">
				{contact.map(CreateCard)}
			</div>
		<div class="footer">
                <div class="footer__container">
                    <div class="grid wide">
                        <div class="row">
                            <div class="col l-4 m-12 c-12">
                                <div class="footer__title">
                                    <h1 class="footer__title-name"><img src="/img/logo.png"  class="logofoot"/></h1>
                                    <p class="footer__title-description">Cộng đồng chia sẻ game hàng đầu Việt Nam.</p>
                                </div>
                                <div class="footer__contact">
                                    <h3 class="footer__contact-name">Liên hệ</h3>
                                    <div class="footer__contact-phone">
                                        <i class='bx bx-phone bx-rotate-270' ></i>
                                        <span class="footer__contact-item">+84929526624</span>
                                    </div>
                                    <div class="footer__contact-mail">
                                        <i class="far fa-envelope"></i>
                                        <span class="footer__contact-item">gameinfo@gmail.com</span>
                                    </div>
                                    <div class="footer__contact-skype">
                                        <i class='bx bxl-skype'></i>
                                        <span class="footer__contact-item">gmin4@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col l-4 m-12 c-12">
							<div class="footer__container-page">
                                    <h3 class="footer__container-page-name">Fanpage</h3>
                                    <div class="footer__container-page-description">Join Us on Facebook</div>
                                </div>
                                <div class="footer__container-page-image">
                                    <div class="footer__container-page-content">
                                    </div>
                                        <div class="border-box">
                                            <img src="./assets/img/footer/125033578_1001841696893345_5680088187322231329_n.png" alt="" class="footer__container-page-image-content-img"/>
                                        </div>
                                        <div class="footer__container-page-content-description">
                                            <span class="footer__container-page-content-description-name" >GameInfo</span>
                                            <span class="footer__container-page-content-description-like" >1.000.000 lượt thích</span>
                                        </div>
                                        <div class="footer__container-page-content-social">
                                            <div class="footer__container-page-content-icon">
                                                <i class='bx bxl-facebook-square' style={{color: "#3A5897"}}></i>
                                                <span>Thích Trang</span>
                                            </div>
                                            <div class="footer__container-page-content-icon">
                                               <i class='bx bxs-message'></i>
                                             <span>Gửi tin nhắn</span>
                                       </div>
                                    </div>
                             </div>        
                                                  
                        </div>    
                        <div class="col l-4 m-12 c-12">            
                        <div class="footer__social">
                            <span class="footer__social-title">Mạng xã hội</span>
                            <span class="footer__social-description">Theo dõi các mạng xã hội để có được những thông tin mới nhất</span>
                            <br></br>
							<div class="footer__social-icon">
                                <div class="footer__social-item-fb">
                                    <FontAwesomeIcon icon={faFacebookF} /> 
                                </div>
                                <div class="footer__social-item-tw">
                                    <FontAwesomeIcon icon={faTwitter} />    
                                </div>
                                <div class="footer__social-item-pi">
                                    <FontAwesomeIcon icon={faPinterest} /> 
                                </div>
                                <div class="footer__social-item-in">
                                    <FontAwesomeIcon icon={faLinkedin} /> 
                                </div>
                            </div>
                        </div>
                         </div>
                        </div>
                        </div>
                    </div>
                    <div class="footer__mini">
                        <div class="footer__mini-coppy-right">
                            <span>Copyrights © 2014 - 2021. All rights reserved by </span>
                            <a href="#">GameInfo</a>
                        </div>
                    </div>
                </div>
		</div>
		
  	);
	}
return (
	<Homez />
)}
    
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }

function App() {
  return (
    <div>
    <Router>
		<div class="topnav" id="myTopnav">
			<Link to="/" onClick = {window.location.reload} class="active"><img src="/img/WebLogo1.jpg"  class="logo"/></Link>
    		<div class="dropdown">
    			<button class="dropbtn">Thể loại 
      				<i class="fa fa-caret-down"></i>
    			</button>
    		<div class="dropdown-content">
				<Link to="/Kinhdi" onClick = {window.location.reload} class="dropdowns-content-tab">Kinh dị</Link>
				<Link to="/Giaido" onClick = {window.location.reload} class="dropdowns-content-tab">Giải đố</Link>
				<Link to="/Thethao" onClick = {window.location.reload} class="dropdowns-content-tab">Thể thao</Link>
    		</div>
  		</div> 
		<Link to="/Gioithieu" onClick = {window.location.reload}>Giới thiệu</Link>
		<Link to="/Dangnhap" onClick = {window.location.reload}>Đăng nhập</Link>
		<Link to="/Dangki" onClick = {window.location.reload}>Đăng kí</Link>
		<Link to="/Gopy" onClick = {window.location.reload}>Góp ý</Link>
  		<a href="javascript:void(0);"  class="icon" onClick={myFunction}>&#9776;</a>
		</div>
		
      <Routes>
       <Route exact path = "/" element = {<Home/>} />
       <Route  path = "/Kinhdi" element = {<Taothe/>}/>
	   <Route  path = "/Giaido" element = {<Taothe/>}/>
	   <Route  path = "/Thethao" element = {<Taothe/>}/>
	   <Route  path = "/Gioithieu" element = {<TrangGioiThieu/>}/>
	   <Route  path = "/Dangki" element = {<TrangDangKi/>}/>
	   <Route  path = "/Dangnhap" element = {<TrangDangNhap/>}/>
	   <Route  path = "/Gopy" element = {<TrangGopY/>}/>
       <Route  path = {ccc} element = {<Xam/>} />
      </Routes>    
  </Router>
  </div>
  )
 }

export default App;
