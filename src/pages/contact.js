import { width } from "dom-helpers";
import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" required />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input type="text" id="name" required />
    //   </div>
    //   <div>
    //     <label htmlFor="message">Message:</label>
    //     <textarea id="message" required />
    //   </div>
    //   <button type="submit">{status}</button>
    // </form>

    <form onSubmit={handleSubmit}>
      <div class="container justify-content-center">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="well well-sm">
              <fieldset>
                <legend class="text-center">Contact us</legend>
                <br />

                <div class="form-group">
                  <div class="col-md-9">
                    <input
                      input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      class="form-control"
                      required
                    ></input>
                    <br />
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-md-9">
                    <input
                      type="text"
                      id="name"
                      placeholder="Your email"
                      class="form-control"
                      required
                    ></input>
                    <br />
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-md-9">
                    <textarea
                      type="text"
                      id="message"
                      placeholder="Please enter your message here..."
                      class="form-control"
                      rows="5"
                      required
                    ></textarea>
                    <br />
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-md-12 text-right">
                    <button type="submit" class="btn btn-success btn-lg">
                      {status}
                    </button>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
