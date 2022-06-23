import React, {useState} from 'react';
import {  BrowserRouter as Router,Route, Routes, Link} from 'react-router-dom'
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { faStar, faEnvelope, faPlusSquare } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import $, { event } from 'jquery'
import contact from './contacts';
import * as cal from './DanhSachGame'
import { faFacebookF, faTwitter, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

function TrangGopY() {
    var [timgame, setTimgame] = useState("")
    $( document ).ready(function() {   
        $(".kinhlup").click(function(){
          $('.thanhtimkiem').toggle();
          $('.thanhsearch').toggle();
        
        });
      });
    function Doichu(event) {
        setTimgame(event.target.value)
        $( document ).ready(function() {
            $(".body-content").hide()
            $(".footer").hide()
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
    return (
        <div>
             <div className='kinhlup'><FontAwesomeIcon icon = {faSearch}></FontAwesomeIcon></div>
            <input style={{display: "none"}} name = "tengame" className='thanhtimkiem' placeholder='Nhập tên game bạn muốn tìm' onChange={Doichu}></input>
            <div className = "cacgame">
				{contact.map(CreateCard)}
			</div>
            <div class="tablez">
	
	<div class="body-content"> 
		<div class="content-navigation">
		

	<form class="default-form" >
		<div class="header-form">
		<h1>Đóng góp ý kiến</h1>
		<p>Hãy đóng góp ý kiến của bạn để giúp chúng tôi hoàn thiện hơn</p>
		</div>
		<div class="inner-from">
		<label>Tên của bạn:</label>
		<input type="text" id="ten" class="barz" placeholder=" Nhập tên của bạn tại đây" required/>
		<label>Email: </label>
		<input type="email" id="mail" class="barz" placeholder=" Nhập Email của bạn tại đây" required/>
		<label>Nội dung đóng góp</label>
		<textarea rows="10" class="barz" placeholder=" ghi ý kiến đóng góp của bạn tại đây" required></textarea>
	  </div>
		<button type="submit" id="form-btn" class="form-btn">Gửi góp ý</button>
		<p className='question'> bạn đã là thành viên của chúng tôi ? <Link to="/Dangnhap" onClick = {window.location.reload}>Đăng nhập</Link> </p>
		<p className='question'> bạn chưa có tài khoản ? <Link to="/Dangki" onClick = {window.location.reload}>Đăng kí ngay!</Link></p>
		
		
	</form>
	</div>
	</div>
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
    )
}

export default TrangGopY