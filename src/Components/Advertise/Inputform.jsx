import React from "react";
import "./Inputform.css";

export const Inputform = () => {
  return (
    <>
      <section id="section-1">
        <div className="inputField">
          <label htmlFor=""> Full Name </label>
          <input type="text" placeholder="Type your answer here..." />
        </div>
        <a href="#section-2">
          <div className="scroll-down"></div>
        </a>
      </section>

      <section id="section-2">
        <div className="inputField">
          <label htmlFor="">Email</label>
          <p>So that we can get in touch with you.</p>
          <input type="email" placeholder="name@example.com" />
        </div>
        <a href="#section-3">
          <div className="scroll-down"></div>
          <a href="#section-1">
          <div className="scroll-up"></div>
          </a>
        </a>
      </section>

      <section id="section-3">
        <div className="inputField">
          <label htmlFor=""> Company</label>
          <input type="text" placeholder="Type your answer here..."  />
        </div>
        <a href="#section-4">
          <div className="scroll-down"></div>
          <a href="#section-2">
          <div className="scroll-up"></div>
          </a>
        </a>
      </section>

      <section id="section-4">
        <div className="inputField">
          <label htmlFor="">
            {" "}
            Are your marketing goals typically focused around performance
            (driving traffic and acquiring customers) or branding (creating lift
            in brand metrics like affinity and consideration)?This question is
            required. *{" "}
          </label>
          <div className="checkbox-items">
            Performance <input type="checkbox" />
            Brand <input type="checkbox" />
          </div>
        </div>
        <a href="#section-3">
                <div className="scroll-up"></div>
        </a>
      </section>
    </>
  );
};
