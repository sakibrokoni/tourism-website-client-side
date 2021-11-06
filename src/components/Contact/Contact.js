import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="container fluid">
      <h4 className="sectionMargin">
        “Travel is fatal to prejudice, bigotry, and narrow mindedness, <br />
        and many of our people need it sorely on these accounts.” <br /> ~ Mark
        Twain
      </h4>
      <form className="sectionMargin1" id="contact" action="" method="post">
        <h2>For Details </h2>
        <br />
        <fieldset>
          <input
            placeholder="Your name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Email Address"
            type="email"
            tabindex="2"
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Phone Number (optional)"
            type="tel"
            tabindex="3"
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your message here...."
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
