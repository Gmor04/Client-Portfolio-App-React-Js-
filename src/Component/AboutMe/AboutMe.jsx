import React from 'react';
import "./AboutMe.css";
import sodiq from "./Aboutmeimg/Sodiq.png";
import line from "../Home/Homeimg/Line.png";
import { NavLink } from "react-router-dom";


function AboutMe() {
    return (
        <div className="pt-4" style={{ height: "fit-content", backgroundColor: "rgb(30,30,30)" }}>
          <div className="container pb-3  " style={{ paddingTop: "6%" }}>
            <div
              className="card text-bg-dark headd "
              style={{
                height: "35vh",
                width: "100%",
                backgroundImage: `url(${sodiq})`,
              }}
            >
              <div className="card-img-overlay text-center mt-2">
                <div className="ohh"> Oh hey there!🌟</div>
                <div
                  className=" mx-auto text-center pt-2 soddi"
                  style={{ width: "70%" }}
                >
                  My birthname is Sodiq, apparently meaning “The Trustworthy”. So,
                  your designs are in good hands. I am a product designer. I work as
                  a remote designer and I love to have fun while giving my users the
                  best experience out of a product or service.
                </div>
              </div>
            </div>
            <img src={line} alt="" className="mt-1" style={{ width: "100%" }} />
            <div className="d-flex justify-content-between text-light">
              <div className="exp">EXPERIENCE</div>
              <div className="resumm">
                <NavLink to="/resume">view my resume</NavLink>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-3 rounded eptt text-light py-3">
                <div className="grap pb-2 ps-2">Graphics Designer</div>
                <div className="ps-2">
                  {" "}
                  <i className="fa-solid fa-circle dott"></i>{" "}
                  <span className="easty ms-1">EasyDraw Photography</span>{" "}
                </div>
                <div className="ps-2">
                  {" "}
                  <i className="fa-solid fa-circle dott"></i>{" "}
                  <span className="easty ms-1">June 2018 - October 2021</span>{" "}
                </div>
              </div>
            </div>
            <img src={line} alt="" className="mt-1" style={{ width: "100%" }} />
    
            <div className="d-flex justify-content-between text-light">
              <div className="exp">SKILLS AND EDUCATION</div>
            </div>
            <div className="row my-2 d-flex justify-content-between ">
              <div className="col-md-6 rounded eptt text-light py-3">
                <div className="grap pb-2 ps-2 row">
                  {" "}
                  <div className="py-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">Prototyping</span>{" "}
                  </div>
                  <div className="py-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">Clear communication skills</span>{" "}
                  </div>
                </div>
                <div className="grap pb-2 ps-2 row">
                  {" "}
                  <div className="py-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">User Research</span>{" "}
                  </div>
                  <div className="ps-y col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">Analytical Skills</span>{" "}
                  </div>
                </div>
                <div className="grap pb-2 ps-2 row">
                  {" "}
                  <div className="py-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">UX Design</span>{" "}
                  </div>
                  <div className="ps-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">Business & product strategy</span>{" "}
                  </div>
                </div>
                <div className="grap pb-2 ps-2 row">
                  {" "}
                  <div className="py-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">UI Design</span>{" "}
                  </div>
                  <div className="ps-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">Team Work</span>{" "}
                  </div>
                </div>
              </div>
    
              <div className="col-md-5 rounded eptt text-light py-3">
                <div className="grapp pb-2 ps-2">Doctor Of Pharmacy</div>
                <div className="grap pb-2 ps-2 row">
                  {" "}
                  <div className="py-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">University Of Ilorin</span>{" "}
                  </div>
                  <div className="py-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">2020 - Present</span>{" "}
                  </div>
                </div>
    
                <div className="grapp pb-2 ps-2">JUPEB Certificate</div>
                <div className="grap pb-2 ps-2 row">
                  {" "}
                  <div className="py-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">Kwara State University</span>{" "}
                  </div>
                  <div className="py-2 col-md-6">
                    {" "}
                    <i className="fa-solid fa-circle dott"></i>{" "}
                    <span className="easty ms-1">2018 - 2019</span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <img src={line} alt="" className="mt-1" style={{ width: "100%" }} />
    
            <div className="exp text-light py-3">More About Me </div>
            <div className="text-light outt">
              Outside of work, creating designs and gathering informations, I am a
              distinction student studying Pharmacy in one of the most reputable
              institution in Nigeria. <br /> My social life revolves around friends,
              family, school and my environment. <br /> I love to take calculated risks and
              I am always willing to learn more and be better version of myself.
            </div>
          </div>
        </div>
      );
}

export default AboutMe;