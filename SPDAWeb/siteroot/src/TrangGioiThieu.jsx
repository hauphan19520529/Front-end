import React, {useState} from 'react';
import {  BrowserRouter as Router,Route, Routes, Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import $, { event } from 'jquery'
import contact from './contacts';
import * as cal from './DanhSachGame'
import { faFacebookF, faTwitter, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

function TrangGioiThieu() {
    var [timgame, setTimgame] = useState("")
    //dùng để ẩn hiện thanh tìm kiếm khi click vào icon kính lúp
    $( document ).ready(function() {   
        $(".kinhlup").click(function(){
          $('.thanhtimkiem').toggle();
          $('.thanhsearch').toggle();
        
        });
      });
      //Hàm đổi chữ đc gọi mỗi khi có chữ mới được nhập vào thanh tìm kiếm, nhằm để ẩn các thuộc tính có class và id như đã nêu trong code bên dưới
    function Doichu(event) {
        setTimgame(event.target.value)
        $( document ).ready(function() {
            $(".body-content").hide()
            $(".footer").hide()
            $("#top-header").hide()
            $('.kinhlup').hide()
          });
          //khi không có chữ nào trong thanh tìm kiếm thì sẽ hiện lại mọi thứ như bình thường
        if(event.target.value == "") {
            $( document ).ready(function() {
                $(".body-content").show()
                $(".footer").show()
                $("#top-header").show()
                $('.kinhlup').show()
              });
        }
    }//hàn CreateCard dùng để nạp dữ liệu từ contact vào khung html ở file Danhsachgame.jsx
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
        <body>
        <div className='kinhlup'><FontAwesomeIcon icon = {faSearch}></FontAwesomeIcon></div>
        <input style={{display: "none"}} name = "tengame" className='thanhtimkiem' placeholder='Nhập tên game bạn muốn tìm' onChange={Doichu}></input>  
        <div className = "cacgame">
			{contact.map(CreateCard)}
		</div>
        <div class="table">
	        <div class="body-content"> 
	        <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet'/>
		    <div class="gioi_thieu">
	            <div class="gt-content">
	                <h1 class="gt-title"> Chào Mừng bạn đến với </h1>
	                <img src="img/WebLogo1.jpg" class = "logogt"/><br/>
	                <img src="img/games-header-1.png" class = "biatranggt"/>
		            <p class="gt-content-1">Gameinfo, tự hào là cộng đồng chia sẻ game hàng đầu Việt Nam, chúng tôi ngày đêm tìm kiếm những con game chất lượng nhất để cho mọi người có thể tiếp cận game và có được những phút giây thư giãn và thoải mái sau những giờ làm việc và học tập căng thẳng. Hãy đến với Gameinfo và chìm đắm trong thế giới game đầy màu sắc nhé! </p>
		            <Link to="/Kinhdi" onClick = {window.location.reload}>
                    <div class="gt-content-category kd">
			            <h3 class="gt-content-kd-title">Game Kinh dị</h3>
			            <img class="gt-content-pic-kd" src="img/residentevil.png"/>
			            <p class="gt-content-text text-kinh-di">
			            Những màn đêm tăm tối, những căn phòng bí ẩn, những tiếng động kì lạ, và những gương mặt thoắt ẩn thoắt hiện,...Game kinh dị từ trước đến nay vẫn luôn là thể loại game thu hút đông đảo người chơi, đặc biệt là các streamer vì sự hồi hộp, đáng sợ nhưng không kém phần hấp dẫn mà nó mang lại. Bạn đã sẵn sàng để khám phá màn đêm và đối mặt với những điều kinh dị nhất chưa?
			            </p>
		            </div>
                    </Link>
                    <Link to="/Giaido" onClick = {window.location.reload}>
		            <div class="gt-content-category gd">
			            <h3 class="gt-content-kd-title">Game Giải Đố</h3>
			            <img class="gt-content-pic-gd" src="img/webbed.png"/>
			            <p class="gt-content-text text-giai-do">
			            Nếu những bài toán, câu hỏi trên trường học chưa đủ để khiến não bạn xoắn óc, thì hãy ngồi xuống trước màn hình máy tính và đến với những tựa game giải đố đầy hóc búa và vui nhộn nhé, chắc chắn sẽ không khiến bạn phải thất vọng!
			            </p>
		            </div>
                    </Link>
                    <Link to="/Thethao" onClick = {window.location.reload}>
			        <div class="gt-content-category tt">
			            <h3 class="gt-content-kd-title">Game Thể Thao</h3>
			            <img class="gt-content-pic-tt" src="img/forzahorizon5.jpg"/>
			            <p class="gt-content-text text-the-thao">
			            Thể thao là một trong những điều tuyệt vời nhất trong cuộc sống của chúng ta, không những mang lại sức khỏe mà còn niềm vui, khơi dậy những cảm xúc mãnh liệt nhất của con người. Hãy đến với thế giới thể thao thu nhỏ và hóa thân vào các cầu thủ, tay đua yêu thích của bạn và trải nghiệm những giây phút máu lửa nhất nhé!
			            </p>
		            </div>
                    </Link>
	            </div>
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
</body>
    )
}

export default TrangGioiThieu