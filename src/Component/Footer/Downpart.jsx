import React from "react";
import "./Footer.css";
import Avatar from "../Home/Homeimg/Avatar.png";
function Downpart() {
  return (
    <div
      className="d-flex justify-content-center py-5 "
      style={{ height: "fit-content", backgroundColor: "rgb(30,30,30)" }}
    >
      <div className="container row d-flex justify-content-center downn">
        <div
          className="col-md-8 row  text-light d-flex justify-content-around "
          style={{ height: "6vh" }}
        >
          
          <div className="col-md-2 text-light">
            <a className="text-decoration-none text-light" href="http://www.linkedin.com/in/sodiq-adedapo">
            <i class="fa-brands fa-linkedin"></i>{" "}
            <span className="linked">LinkedIN</span>
            </a>
          </div>
          
          <div className="col-md-2 text-light">
          <a className="text-decoration-none text-light" href="https://twitter.com/niyiwurld">
            <i class="fa-brands fa-twitter"></i>{" "}
            <span className="linked">Twitter </span>
            </a>
          </div>
          <div className="col-md-2 text-light">
            <div className="d-flex justify-content-center w-100">
              <div className="avatar-container">
                <img src={Avatar} alt="" className="avatarrr" />
              </div>
            </div>
          </div>
          <div className="col-md-2 text-light">
          <a className="text-decoration-none text-light" href="https://www.behance.net/niyiwurld">
            <i class="fa-brands fa-dribbble"></i>{" "}
            <span className="linked">Dribbble</span>
            </a>
          </div>
          <div className="col-md-2 text-light">
          <a className="text-decoration-none text-light" href="https://Instagram.com/niyiwurld">
            <i class="fa-brands fa-instagram"></i>{" "}
            <span className="linked">Instagram</span>
            </a>
          </div>
        </div>
        <div className=" row d-flex justify-content-center text-light  ">
          {" "}
          <div className="col-md-6 d-flex justify-content-center emaill">
            <i class="fa-regular fa-envelope"></i>{" "}
            <span className="linked ms-2">niyiwurld@gmail.com</span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Downpart;
