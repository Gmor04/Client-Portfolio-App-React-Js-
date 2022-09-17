import React from 'react';
import resume from "./Resumeimg/resumeimg.jpeg";
import resumepdf from "./Resumeimg/Resume01.pdf"

function Resume() {
    return (
        <div
          className=" pb-4 mt-4 "
          style={{ height: "fit-content", backgroundColor: "rgb(30,30,30)" }}
        >
          <div className="container w-100 d-flex justify-content-center align-items-center pt-5 row">
            <div className="col-md-8">
            <img
              src={resume}
              className="img-fluid"
              style={{ height: "80vh", width: "100%" }}
              alt="..."
            />
            </div>
            
            <div className="ms-3 mt-3 col-md-3 d-flex justify-content-center">
              <a href={resumepdf}  className="btn btn-warning fs-5 fw-normal"  download={resumepdf}>Get Resume</a>
            </div>
          </div>
        </div>
      );
}

export default Resume;