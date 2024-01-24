import React from "react";
import "./contact.scss";
import map from "../../Images/map.png";
import { contactdata } from "./data";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="top">
          <h1>Contact</h1>
          <h2>Don't be shy! Hit me up! 👇</h2>
        </div>

        <div className="bottom">
          {contactdata.map((item) => {
            return (
              <div className="subbottom" key={item.id}>
                {item.locationhover && <span className="hoverspan" />}
                <a
                  href={item.link}
                  target="_blank"
                  className="a"
                  onClick={item.click}
                >
                  <div className="left">
                    <img src={item.img} />
                  </div>
                  <div className="right">
                    <span>{item.title}</span>
                    {/* <a href={item.link} target="_blank" className="a"> */}
                    <span className={item.hover == true ? "spanlast" : ""}>
                      {item.title2}
                    </span>
                    {/* </a> */}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
