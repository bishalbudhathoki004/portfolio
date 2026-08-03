import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ErrorMsg from "../ErrorMsg";
import "./style.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_azixn9m",
        "template_q44rkme",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Gl9CPp3tuG0DtN6tO"
      );

      setResponseMessage({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setResponseMessage({
        type: "error",
        message: "Failed to send message!",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-control"
            value={formData.name}
            onChange={handleChanges}
          />
          {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-control"
            value={formData.email}
            onChange={handleChanges}
          />
          {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
        </div>

        <div className="input-group">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input-control"
            value={formData.subject}
            onChange={handleChanges}
          />
          {errors.subject && <ErrorMsg>{errors.subject}</ErrorMsg>}
        </div>

        <div className="input-group">
          <textarea
            name="message"
            placeholder="Message"
            className="input-control"
            value={formData.message}
            onChange={handleChanges}
          />
          {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
        </div>

        <div className="submit-btn">
          <button
            className="btn"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {responseMessage && (
        <div
          className={`alert ${
            responseMessage.type === "success"
              ? "alert-success"
              : "alert-error"
          }`}
        >
          {responseMessage.message}
        </div>
      )}
    </div>
  );
};

export default Form;