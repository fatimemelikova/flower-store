import React from "react";
import { FaStar } from "react-icons/fa";

function Comments() {
  return (
    <>
      <div className="com-container">
        <div className="com-wrapper">
          <p>YORUMLAR</p>
          <h2>Müşterilerimiz ne diyor?</h2>
          <div className="com-boxes">
            <div className="com-box">
              <div className="stars">
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
              </div>
              <p>
                "Renkler gerçekten canlıydı ama hiç abartılı durmuyordu. Ofise
                gelen buket tam istediğim gibiydi."
              </p>
              <div className="profile">
                <div className="pp">EY</div>
                <div className="pp-content">
                  <p style={{ fontWeight: "bold" }}>Elif Y.</p>
                  <p style={{ fontSize: "13px", color: "#e8ebe8c9" }}>
                    Kadikoy
                  </p>
                </div>
              </div>
            </div>
            <div className="com-box">
              <div className="stars">
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
              </div>
              <p>
                "Renkler gerçekten canlıydı ama hiç abartılı durmuyordu. Ofise
                gelen buket tam istediğim gibiydi."
              </p>
              <div className="profile">
                <div className="pp">EY</div>
                <div className="pp-content">
                  <p style={{ fontWeight: "bold" }}>Elif Y.</p>
                  <p style={{ fontSize: "13px", color: "#e8ebe8c9" }}>
                    Kadikoy
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="com-box">
              <div className="stars">
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
              </div>
              <p>
                "Renkler gerçekten canlıydı ama hiç abartılı durmuyordu. Ofise
                gelen buket tam istediğim gibiydi."
              </p>
              <div className="profile">
                <div className="pp">EY</div>
                <div className="pp-content">
                  <p style={{ fontWeight: "bold" }}>Elif Y.</p>
                  <p style={{ fontSize: "13px", color: "#e8ebe8c9" }}>
                    Kadikoy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
