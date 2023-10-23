import "./App.css";
import { LuLanguages } from 'react-icons/lu';
import { MdArrowDropDown } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import  secondImage  from './images/secondPage.png';
import thirdImage from './images/thirdImage.jpg';
import fourthImage from './images/fourthImage.png';
import fifthImage from './images/fifthImage.png';
import { AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import logo from './images/netflixlogo.png';
import { useState } from "react";
import tv from '../src/images/tv.png'

function App() {
  const [showFirstQuestion,setShowFirstQuestion] = useState(false);
  function firstQuestion(){
    setShowFirstQuestion(!showFirstQuestion);
  }
  const [showSecondQuestion,setShowSecondQuestion] = useState(false);
  function secondQuestion(){
    setShowSecondQuestion(!showSecondQuestion);
  }
  const [showThirdQuestion,setShowThirdQuestion] = useState(false);
  function thirdQuestion(){
    setShowThirdQuestion(!showThirdQuestion);
  }
  const [showFourthQuestion,setShowFourthQuestion] = useState(false);
  function fourthQuestion(){
    setShowFourthQuestion(!showFourthQuestion);
  }
  const [showFifthQuestion,setShowFifthQuestion] = useState(false);
  function fifthQuestion(){
    setShowFifthQuestion(!showFifthQuestion);
  }
  const [showSixthQuestion,setShowSixthQuestion] = useState(false);
  function sixthQuestion(){
    setShowSixthQuestion(!showSixthQuestion);
  }

  return (
    <div className="wrapper">

        <div className="firstPage">
          <div className="firstSection">

              <div className="header">

                  <div> <img src={logo} ></img></div>
                  
                  <div className="firstbuttons">
                    <button className="english"> <span><LuLanguages className="languageIcon"/></span><span className="midEnglish">English</span><span><MdArrowDropDown className="languageIcon downarrow"/></span></button>
                    <button className="signin">Sign In</button>
                  </div>

              </div>

              <div className="heading">
                  <div className="heading1">The biggest Indian hits. Ready to watch here from ₹ 149.</div>
                  <div className="heading3">Join today. Cancel anytime.</div>
                  <div className="heading4">Ready to watch? Enter your email to create or restart your membership.</div>
              </div>
              <div className="inputDiv">
                <div className="inputtext1"><input className="inputtext" placeholder="Email address"></input></div>
                <div className="inputButton">
                  
                  <button className="inputBtn">
                    <div className="get">Get Started</div>
                    <div><IoIosArrowForward/></div>
                  </button>
                    
                </div>

              </div>
        </div>
      
        </div>
        <hr className="new1"></hr>

        <div className="secondPage">
          <div className="insidePage">
            <div className="secondText">
                <div className="second1">Enjoy on your TV</div>
                <div  className="second2">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
            </div>
            <div className="secondImage sec">

                <video className="videoOne" autoPlay playsInline muted loop>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                </video>
                <div className="image-container">
                <img src={tv} className="tv"></img>
                </div>

                
            </div>
          </div>

          

        </div>
        <hr className="new1"></hr>

        <div className="secondPage">
          <div className="insidePage  insidePage1">
            <div className="secondImage">
                <img src={thirdImage}></img>
            </div>
            <div className="secondText">
                <div className="second1">Download your shows to watch offline</div>
                <div  className="second2">Save your favourites easily and always have something to watch.
                </div>
            </div>
            
          </div>

        </div>

        <hr className="new1"></hr>

        

        <hr className="new1"></hr>

        <div className="secondPage">
          <div className="insidePage">
            <div className="secondText">
                <div className="second1">Watch everywhere</div>
                <div  className="second2">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
            </div>
            <div className="secondImage sec">

                <video className="videoOne" autoPlay playsInline muted loop>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" className="cutvideo" type="video/mp4" />
                </video>
                <div className="image-container">
                <img src={fourthImage} className="tv tv1"></img>
                </div>

                
            </div>
          </div>

          

        </div>


        <hr className="new1"></hr>

        <div className="secondPage">
          <div className="insidePage">
                <div className="secondImage">
                    <img src={fifthImage}></img>
                </div>
            <div className="secondText">

                <div className="second1">Create profiles for kids</div>
                <div  className="second2">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</div>
            </div>
            
          </div>

        </div>

        
        <hr className="new1"></hr>


        <div className="questions">
          <div className="questionsFAQ">
            <div className="questionHeading">Frequently Asked Questions</div>
            <div className="box"  onClick={firstQuestion}><div className="firstquestion">What is Netflix?</div> <div className="firstquestionIcon"> { showFirstQuestion? <RxCross2/>: <AiOutlinePlus/> }</div> </div>
            { showFirstQuestion &&
              <div className="insideBox">
                <span>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                <br></br>
                <br></br>
                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </span>
              </div>
            }
            <div className="box"  onClick={secondQuestion}><div className="firstquestion">How much does Netflix cost?</div> <div className="firstquestionIcon"> { showSecondQuestion? <RxCross2/>: <AiOutlinePlus/> }</div> </div>
            { showSecondQuestion &&
              <div className="insideBox">
                <span>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</span>
              </div>
            }
            <div className="box"  onClick={thirdQuestion}><div className="firstquestion">Where can I watch?</div> <div className="firstquestionIcon"> { showThirdQuestion? <RxCross2/>: <AiOutlinePlus/> }</div> </div>
            { showThirdQuestion &&
              <div className="insideBox">
                <span>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                <br></br>
                <br></br>
                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                </span>
              </div>
            }
            <div className="box"  onClick={fourthQuestion}><div className="firstquestion">How do I cancel?</div> <div className="firstquestionIcon"> { showFourthQuestion? <RxCross2/>: <AiOutlinePlus/> }</div> </div>
            { showFourthQuestion &&
              <div className="insideBox">
                <span>
                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                </span>
              </div>
            }
            <div className="box"  onClick={fifthQuestion}><div className="firstquestion">What can I watch on Netflix?</div> <div className="firstquestionIcon"> { showFifthQuestion? <RxCross2/>: <AiOutlinePlus/> }</div> </div>
            { showFifthQuestion &&
              <div className="insideBox">
                <span>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </span>
              </div>
            }
            <div className="box"  onClick={sixthQuestion}><div className="firstquestion">Is Netflix good for kids?</div> <div className="firstquestionIcon"> { showSixthQuestion? <RxCross2/>: <AiOutlinePlus/> }</div> </div>
            { showSixthQuestion &&
              <div className="insideBox">
                <span>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                <br></br>
                <br></br>
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                </span>
              </div>
            }
            
          </div>

          <div className="ready">
            <div className="readyText">Ready to watch? Enter your email to create or restart your membership.</div>
            <div className="inputDiv">
                <div className="inputtext1 inputext2"><input className="inputtext" placeholder="Email address"></input></div>
                <div className="inputButton inputButton2">
                  
                  <button className="inputBtn inputBtn2">
                    <div className="get">GetStarted</div>
                    <div><IoIosArrowForward/></div>
                  </button>
                    
                </div>

              </div>
          </div>


        </div>

        
        <hr className="new1"></hr>

        <div className="footer">
          <div className="footerBox">
              <div className="call">Questions? Call <a  href="tel:000-800-919-1694" > 000-800-919-1694 </a></div>
              <div className="gridArea">
                <div className="FAQs">
                  <a>FAQ</a>
                  <a>Investor Relations</a>
                  <a>Privacy</a>
                  <a>Speed Test</a>
                </div>
                <div className="helps">
                  <a>Help Centre</a>
                  <a>Jobs</a>
                  <a>Cookie Preferences</a>
                  <a>Legal Notices</a>
                </div>
                <div className="Accounts">
                  <a>Account</a>
                  <a>Ways to Watch</a>
                  <a>Corporate Information</a>
                  <a>Only on Netflix</a>
                </div>
                <div className="Medias">
                  <a>Media Centre</a>
                  <a>Terms of Use</a>
                  <a>Contact Us</a>
                </div>
              </div>

              <button className="english english1"> <span><LuLanguages className="languageIcon"/></span><span className="midEnglish">English</span><span><MdArrowDropDown className="languageIcon downarrow"/></span></button>

              <div className="net">NetFlix India</div>

          </div>

        </div>




    </div>
  );
}

export default App;
