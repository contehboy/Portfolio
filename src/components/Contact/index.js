import React, { useState } from "react";
import { useEffect } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const inputChange = (e) => {
    const { target } = e;
    const type = target.name;
    const value = target.value;
    if (type == "Email") {
      setEmail(value);
    } else if (type == "Name") {
      setName(value);
    } else {
      setMessage(value);
    }
  };
  const validateEmail = (email) => {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const onSumbit = (e) => {
    e.preventDefault();

    if (!message) {
      setErrorMessage("Message is required");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Email is not valid");
      return;
    }
    setEmail("");
    setName("");
    setMessage("");
  };
  return (
    <div class="flex-row">
      <h1>Contact Me</h1>
      <div class="contact-form">
        <form class="form">
          <label for="contact-name">Name</label>
          <input
            value={name}
            name="Name"
            onChange={inputChange}
            type="text"
            id="contact-name"
            placeholder="Your Name"
          />
          <label for="contact-email">Email</label>
          <input
            value={email}
            name="Email"
            onChange={inputChange}
            type="text"
            id="contact-email"
            placeholder="Your Email"
          />
          <label for="contact-message">Message</label>
          <textarea
            value={message}
            name="Message"
            onChange={inputChange}
            type="text"
            id="contact-message"
            placeholder="Your Message"
          />
          <button onClick={onSumbit}>Submit</button>
        </form>
      </div>
      {errorMessage && (
        <div>
          <p class="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
