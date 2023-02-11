import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { actionAlert } from "../rtk/actions/actionAlert";
import { Oval } from "react-loader-spinner";
import { useDispatch } from "react-redux";

function Contact() {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      name: "",
      email: "  ",
      subject: "",
      message: "",
    });
    const { name, email, subject, message } = formData;
    


    const [loading, setLoading] = useState(false);
    const onChange = (e) => {
      
        setFormData({ ...formData, [e.target.name]: e.target.value });
      
    };
    const onSubmit = (e) => {
      e.preventDefault();
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        name,
        email,
        subject,
        message,
      };
      setLoading(true);
      try {
        axios
          .post("http://localhost:8000/api/contacts/", body, config)
            .then((res) => {
                
                dispatch(actionAlert("Message send successfully", "success"));
                

            });
        window.scrollTo(0, 0);
        setLoading(false);
      } catch (err) {
          dispatch(actionAlert("Error with Sending Message", "error"));
        setLoading(false);
        window.scrollTo(0, 0);
      }
    };


  return (
    <div className="contact">
      <Helmet>
        <title>Auto Car - Contact</title>
        <meta name="description" content="Contact us" />
      </Helmet>
      <form className="contact__form" onSubmit={(e) => onSubmit(e)}>
        <label className="contact__form__label" htmlFor="name">
          Name*
        </label>
        <input
          className="contact__form__input"
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={(e) => onChange(e)}
          value={name}
          required
        />
        <label className="contact__form__label" htmlFor="email">
          Email*
        </label>
        <input
          className="contact__form__input"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          onChange={(e) => onChange(e)}
          value={email}
          required
        />
        <label className="contact__form__label" htmlFor="subject">
          Subject*
        </label>
        <input
          className="contact__form__input"
          name="subject"
          type="text"
          placeholder="Buying Car"
          onChange={(e) => onChange(e)}
          value={subject}
          required
        />
        <label className="contact__form__label" htmlFor="message">
          Message*
        </label>
        <textarea
          className="contact__form__textarea"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          onChange={(e) => onChange(e)}
          value={message}
        />
        {loading ? (
          <div className="contact__form__loader">
            <Oval color="#424242" height={50} width={50} />
          </div>
        ) : (
          <button className="contact__form__button" htmltype="submit">
            Send
          </button>
        )}
      </form>
    </div>
  );
}
export default Contact;
