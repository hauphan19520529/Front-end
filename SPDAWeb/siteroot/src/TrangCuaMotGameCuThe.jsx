import React, {useState} from 'react';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faEnvelope, faPlusSquare, faMoon, faSun } from "@fortawesome/free-regular-svg-icons"
import { faFacebookF, faTwitter, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import $, { event } from 'jquery'
import Imslide, {GameTuongTu} from './asnav';

var lp = window.location.pathname.slice(1)
lp = lp.replace(/%20/g, " ")

function NoiDung(propz) {
    return (
    <div>
    <pre className = "content">
        <img src = {propz.anh} className='anhbaiviet'></img>
        <strong>{propz.tieude}</strong>
        {propz.nd}  
    </pre>
    <br></br>
    </div>
    )
}

function taoNoidung(noidung) {
return (
    <NoiDung
    anh = {noidung.anh}
    tieude = {noidung.tieude}
    nd = {noidung.nd}
    >
    </NoiDung>
)
}

function GameCuThe (propz) {
    var srcc = "/video/" + lp + "/trailer.mp4"
    var [likepressed, setLikepressed] = useState(0)
    var [dislikepressed, setDislikepressed] = useState(0)
    var [likes, setLikes] = useState(propz.solike)
    var [dislikes, setDislikes] = useState(propz.sodislike)
    var [i, setI] = useState((likes * 100) / (likes + dislikes))
    var [shine, setShine] = useState(0)
    var [what, setWhat] = useState(faMoon)
    
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
    function getdark() {
        var element = document.getElementById("page");
        element.classList.toggle("part-containerz");
        var element = document.getElementById("pagez");
        element.classList.toggle("part-containerz");
        var element = document.getElementById("pagezz");
        element.classList.toggle("part-containerz");
        var element = document.getElementById("pagezzz");
        element.classList.toggle("part-containerz");
        var element = document.getElementById("pagezzzz");
        element.classList.toggle("part-containerz");
        var element = document.getElementById("wholepage");
        element.classList.toggle("part-containerzz");
        var element = document.getElementById("saoo");
        element.classList.toggle("progressnenblackxx");
        var element = document.getElementById("saooo");
        element.classList.toggle("progressnenblackxxx");
        $(document).ready(function(){
            if(shine == 0) {
              $(".ngoisaoz").css({"color": "yellow"})
              setShine(1)
              setWhat(faSun)
            }
            else if(shine == 1) {
                $(".ngoisaoz").css({"color": "black"})
                setShine(0)
                setWhat(faMoon)
              }
          });
      }
    return (
        <div className="wapper" id = "wholepage">
        <div className='kinhlup' onClick={getdark}><FontAwesomeIcon icon = {what} className='sunormoon'/></div>
        <br></br>
        <section class="game-info part-container " id = "page">
            <img src={propz.image} class="game-photo"/>
            <div class="game-title">
                <div class="game-name">{propz.name}</div>
                <div class="thongtinsobo">
                    <div className = "starzz">
                    <div className = "progressnonez">
                        <div id = "progressz" style = {{width: i + "%"}}></div>
                    </div> 
                    <div className = "progressnenblack" id = "saoo"></div>           
                        <FontAwesomeIcon className = "ngoisaoz" icon = {faStar} id = "saooo" />
                        <FontAwesomeIcon className = "ngoisaoz" icon = {faStar} id = "saooo"/>
                        <FontAwesomeIcon className = "ngoisaoz" icon = {faStar} id = "saooo"/>
                        <FontAwesomeIcon className = "ngoisaoz" icon = {faStar} id = "saooo"/>
                        <FontAwesomeIcon className = "ngoisaoz" icon = {faStar} id = "saooo"/>
                    </div>
                    <div className = "tuongtacz" id = "pagez">
                        <FontAwesomeIcon  icon = {faThumbsUp}  onClick={TangLike} id = "uplike"></FontAwesomeIcon>
                        <div className = "solike">{likes}</div>
                        <FontAwesomeIcon  icon = {faThumbsDown}  onClick={TangDislike} id = "downlike"></FontAwesomeIcon>
                        <div className = "sodislike">{dislikes}</div>
                        <FontAwesomeIcon  icon = {faComment}></FontAwesomeIcon>
                        <div className = "socmt">{propz.socmt}</div>
                    </div>
                </div>

            </div>
            <div class="game-contact">
                <div class="contact-item" style={{backgroundColor: "rgb(59, 89, 152)"}}>
                <FontAwesomeIcon icon={faFacebookF} />           
                    <span>Facebook</span>
                </div>
                <div class="contact-item" style={{backgroundColor: "rgb(29, 161, 242)"}}>
                <FontAwesomeIcon icon={faTwitter} />                   
                    <span>Twitter</span>
                </div>
                <div class="contact-item" style={{backgroundColor: "rgb(132, 132, 132)"}}>
                <FontAwesomeIcon icon={faEnvelope} />          
                    <span>Email</span>
                </div>
                <div class="contact-item" style={{backgroundColor: "rgb(255, 101, 80)"}}>
                <FontAwesomeIcon icon={faPlusSquare} />  
                    <span>More</span>
                </div>
               
            </div>
        </section>
        <section class = "part-container" id = "pagezzzz">
            <div class = "ttso">Thông tin sơ bộ</div>
            <div className='ttt'>Ngày phát hành: {propz.ngayph}</div>
            <div className='ttt'>Nhà phát triển: {propz.nhaph}</div>
            <div className='ttt'>Nhà xuất bản: {propz.nhaxb}</div>
            <div className='ttt'>Thể loại: {propz.theloai}</div>
        </section>
        <section class="game-desc-more part-container" id = "pagezz">
           <div className = "contentz">
                    {propz.noidung.map(taoNoidung)}
            </div>
            <br></br>
            <video width="100%" controls>
                <source src={srcc} type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
        </section>
        <Imslide />
        <section class="recommend part-container" id = "pagezzz">
            <div class="recommend-title">
                <p><b>CẤU HÌNH ĐỀ NGHỊ:</b></p><br></br>
                <p><b>MINIMUM:</b></p>
                <div className = "contentz">
                <pre className = "content">
                    {propz.minimum}
                </pre>
                <br></br>
            </div>
            </div>
            <div class="recommend-title">
            
                <p><b>RECOMMENDED:</b></p>
                <div className = "contentz">
                <pre className = "content">
                    {propz.recommended}
                </pre>
                <br></br>
            </div>
                <p><b>GIÁ THÀNH</b></p>
                <p style={{color: "red"}}>{propz.gia}</p>
            </div>
            <br></br>
            <div>
                <p><b>MUA BẢN QUYỀN GAME</b></p>
                <a href={propz.link}><img src = "/img/steam.jpeg" class = "linksteam"/></a>
            </div>
            <br></br>
            <div>
                <p><b>CÁC GAME TƯƠNG TỰ</b></p>
                <GameTuongTu theloai = {propz.theloai} name = {propz.name}  />
            </div>
            <form className='cmtsec'>
                    <br></br>
                	<h3 class="pull-left">Bình luận</h3>
                    <br></br>
                    <fieldset>
                        <div class="row">
                            <div class="avatar">
                            	<img class="hinhdaidien" src="https://www.jbrhomes.com/wp-content/uploads/blank-avatar.png" alt=""/>
                            </div>
                            <div class="phancmt">
                                <textarea class="nhapcmt" id="message" placeholder="Bình luận của bạn" required=""></textarea>
                	            <button type="submit" class="submitcmt">Gửi</button>
                            </div>
                        </div>  	
                    </fieldset>
                    <br></br>
                </form>
        </section>
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

export default GameCuThe