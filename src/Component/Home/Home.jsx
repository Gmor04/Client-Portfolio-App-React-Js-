import React from 'react';
import "./Home.css";
import Avatar from "./Homeimg/Avatar.png";
import line from "./Homeimg/Line.png";
import main from "./Homeimg/main.png"
import main2 from "./Homeimg/main2.png"
import iphone1 from "./Homeimg/iPhone1.png"
import iphone2 from "./Homeimg/iPhone2.png"
import laptop from "./Homeimg/laptop.png"

function Home() {
    return (
        <div className=" pb-5 mt-5 " style={{ height: "fit-content", backgroundColor: 'rgb(30,30,30)' }}>
          <div className="container d-flex justify-content-center py-3">
            <div className="avatar-containe">
              <img src={Avatar} alt="" className="avatarr" />
            </div>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5  detail">
                Hi, my name is <span> Sodiq Adedapo</span>. I am a{" "}
                <span> Digital Product Designer </span> passionate about making
                user’s experience as easy as pie.
                
              </div>
            </div>
            <div className="text-center pro pt-2">Projects</div>
            <div className="text-center">
              <img src={line} alt="" style={{ width: "15%" }} />
            </div>
            <div className="text-center">
              <img src={line} alt="" style={{ width: "15%" }} />
            </div>
    
            <div className="row my-4 d-flex justify-content-between">
              <div className="col-md-5 text-light pt-3 ">
                <div className="mywor">Myworkhr</div>
                <div className="webapp px-3 rounded-pill mt-2">Web app design</div>
                <div className="manage">
                  Managing employees without the hassle of traditional management
                </div>
                <div className="view mt-3">
                  View case study <i className="fa fa-arrow-right"></i>
                </div>
              </div>
              <div className="col-md-5 pt-3  imgg " >
                <img src={main} alt="" style={{width: '90%', height: '80%'}} />
              </div>
            </div>
    
            <div className="row my-4 d-flex justify-content-between">
              <div className="col-md-5 text-light pt-3 ">
                <div className="mywor">NOWNESS RECREATED DESIGN</div>
                <div className="webapp px-3 rounded-pill mt-2">Mobile App design</div>
                <div className="manage">
                Managing employees without the hassle of traditional management
                </div>
                <div className="view mt-3">
                  View case study <i className="fa fa-arrow-right"></i>
                </div>
              </div>
              <div className="col-md-5 pt-3  imgg " >
                <img src={main2} alt="" style={{width: '90%', height: '90%'}} />
              </div>
            </div>
    
            <div className="row my-5 d-flex justify-content-between">
              <div className="col-md-5 text-light mt-3 ">
                <div className="mywor">Fidelity Bank Revamp</div>
                <div className="webapp px-3 rounded-pill mt-2">Mobile App design</div>
                <div className="manage">
                Redesigning user asthetics & experience for financial transactions
                </div>
                <div className="view mt-3">
                  View case study <i className="fa fa-arrow-right"></i>
                </div>
              </div>
              <div className="col-md-5 mt-3  imgg " >
                <img src={iphone1} alt="" style={{width: '50%', height: '90%'}} />
                <img src={iphone2} alt="" style={{width: '50%', height: '90%'}} />
              </div>
            </div>
    
            <div className="row my-4 d-flex justify-content-between">
              <div className="col-md-5 text-light pt-3 ">
                <div className="mywor">Thebulb africa FELLOWSHIP</div>
                <div className="webapp px-3 rounded-pill mt-2">Mobile App design</div>
                <div className="manage">
                Managing employees without the hassle of traditional management
                </div>
                <div className="view mt-3">
                  View case study <i className="fa fa-arrow-right"></i>
                </div>
              </div>
              <div className="col-md-5 pt-3  imgg " >
                <img src={laptop} alt="" style={{width: '90%', height: '90%'}} />
              </div>
            </div>
              
          </div>
        </div>
      );
}

export default Home;