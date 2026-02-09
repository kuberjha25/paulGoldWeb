import React, { useState, useEffect } from "react";
import "../styling/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
    consentGiven: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  // Calculate word count when message changes
  useEffect(() => {
    const words = formData.message.trim()
      ? formData.message.split(/\s+/).filter((word) => word.length > 0)
      : [];
    setWordCount(words.length);
  }, [formData.message]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) error = "This field is required";
        break;

      case "email":
        if (!value.trim()) {
          error = "This field is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "mobile":
        if (
          value &&
          !/^[1-9][\d]{0,15}$/.test(value.replace(/\s+/g, ""))
        ) {
          error = "Please enter a valid mobile number";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "This field is required";
        } else if (wordCount > 120) {
          error = "Message cannot exceed 120 words";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      if (key !== "consentGiven") {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    // Check consent
    if (!formData.consentGiven) {
      alert("Please consent to the terms by checking the checkbox");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for API
      const apiData = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      // Send to dummy API (JSONPlaceholder)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiData),
        },
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const result = await response.json();
      console.log("API Response:", result);

      // Show success message
      setIsSuccess(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          message: "",
          consentGiven: false,
        });
        setErrors({});
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  return (
    <section id="contact-section" className="contact-section">

    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Our team will get in touch with you shortly </p>
      </div>

      {isSuccess && (
        <div className="success-message show">
          <i className="fas fa-check-circle"></i>
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter Your First Name"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && (
              <div className="error-message show">{errors.firstName}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Your Last Name"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && (
              <div className="error-message show">{errors.lastName}</div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mobile">Your Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.mobile ? "error" : ""}
            />
            {errors.mobile && (
              <div className="error-message show">{errors.mobile}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email ? "error" : ""}
              required
            />
            {errors.email && (
              <div className="error-message show">{errors.email}</div>
            )}
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.message ? "error" : ""}
            required
          />
          {errors.message && (
            <div className="error-message show">{errors.message}</div>
          )}
        </div>

        <div className="consent-checkbox">
          <input
            type="checkbox"
            id="consentCheckbox"
            name="consentGiven"
            checked={formData.consentGiven}
            onChange={handleChange}
          />
          <label htmlFor="consentCheckbox">
            By submitting this form, you authorize Paul Gold & its associates to
            call/sms/email on your registered mobile number/email.
          </label>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="loading-spinner"></div>
              Sending...
            </>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
    </section>
  );
};

export default ContactUs;
