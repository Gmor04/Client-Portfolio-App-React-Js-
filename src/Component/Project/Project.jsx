import React from 'react';
import "./Project.css";
import main from "../Home/Homeimg/main.png";
import main2 from "../Home/Homeimg/main2.png";
import iphone1 from "../Home/Homeimg/iPhone1.png";
import iphone2 from "../Home/Homeimg/iPhone2.png";
import laptop from "../Home/Homeimg/laptop.png";

function Project() {
    return (
        <div
          className=" pb-4 "
          style={{ height: "fit-content", backgroundColor: "rgb(30,30,30)" }}
        >
          <div className="container mt-4 pt-4">
            <div className="here">Here are some projects i’ve worked on</div>
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
              <div className="col-md-5 pt-3  imgg ">
                <img src={main} alt="" style={{ width: "90%", height: "80%" }} />
              </div>
            </div>
    
            <div className="row my-4 d-flex justify-content-between">
              <div className="col-md-5 text-light pt-3 ">
                <div className="mywor">NOWNESS RECREATED DESIGN</div>
                <div className="webapp px-3 rounded-pill mt-2">
                  Mobile App design
                </div>
                <div className="manage">
                  Managing employees without the hassle of traditional management
                </div>
                <div className="view mt-3">
                  View case study <i className="fa fa-arrow-right"></i>
                </div>
              </div>
              <div className="col-md-5 pt-3  imgg ">
                <img src={main2} alt="" style={{ width: "90%", height: "90%" }} />
              </div>
            </div>
    
            <div className="row my-5 d-flex justify-content-between">
              <div className="col-md-5 text-light mt-3 ">
                <div className="mywor">Fidelity Bank Revamp</div>
                <div className="webapp px-3 rounded-pill mt-2">
                  Mobile App design
                </div>
                <div className="manage">
                  Redesigning user asthetics & experience for financial transactions
                </div>
                <div className="view mt-3">
                  View case study <i className="fa fa-arrow-right"></i>
                </div>
              </div>
              <div className="col-md-5 mt-3  imgg ">
                <img src={iphone1} alt="" style={{ width: "50%", height: "90%" }} />
                <img src={iphone2} alt="" style={{ width: "50%", height: "90%" }} />
              </div>
            </div>
    
            <div className="row my-4 d-flex justify-content-between">
              <div className="col-md-5 text-light pt-3 ">
                <div className="mywor">Thebulb africa FELLOWSHIP</div>
                <div className="webapp px-3 rounded-pill mt-2">
                  Mobile App design
                </div>
                <div className="manage">
                  Managing employees without the hassle of traditional management
                </div>
                <div className="view mt-3">
                  View case study <i className="fa fa-arrow-right"></i>
                </div>
              </div>
              <div className="col-md-5 pt-3  imgg ">
                <img src={laptop} alt="" style={{ width: "90%", height: "90%" }} />
              </div>
            </div>
          </div>
        </div>
      );
}

export default Project;