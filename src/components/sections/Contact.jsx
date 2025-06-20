import React, { useState } from "react";
import axios from "axios";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import user_info from "../../data/user_info.js";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormStatus((prev) => ({ ...prev, error: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: null, error: null });

    try {
      const response = await axios.post(
        "https://formspree.io/f/xdknnnnw",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        setFormStatus({
          submitting: false,
          success: "Message sent successfully!",
          error: null,
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: null,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let's Get in Touch:{" "}
        <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
      </h4>

      {/* =========== DESCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {user_info.contact.description}
      </p>

      {/* =========== CONTACT FORM =========== */}
      <div className="mt-12">
        <h5 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Send a Message
        </h5>
        <form onSubmit={handleSubmit} className="mt-6 max-w-md">
          <div className="form-group mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:bg-zinc-800 dark:text-zinc-100"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:bg-zinc-800 dark:text-zinc-100"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:bg-zinc-800 dark:text-zinc-100"
              placeholder="Your message here..."
            />
          </div>
          <button
            type="submit"
            disabled={formStatus.submitting}
            className="w-full px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-500 dark:hover:bg-red-600"
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </button>
          {formStatus.success && (
            <p className="mt-4 text-green-600 dark:text-green-400">
              {formStatus.success}
            </p>
          )}
          {formStatus.error && (
            <p className="mt-4 text-red-600 dark:text-red-400">
              {formStatus.error}
            </p>
          )}
        </form>
      </div>

      <div className="mt-12">
      <a href="../../Mycv.pdf" download="Mycv.pdf" 
      className="w-full px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-500 dark:hover:bg-red-600">
        Download My Resume
      </a>      
      </div>

      {/* =========== LINKS =========== */}
      <div className="mt-12">
        {/* =========== FACEBOOK =========== */}
        <a
          href={user_info.socials.facebook}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300"
        >
          <FaFacebook className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Facebook</span>
        </a>

        {/* =========== X =========== */}
        <a
          href={user_info.socials.twitter}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaSquareXTwitter className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on X</span>
        </a>

        {/* =========== INSTAGRAM =========== */}
        <a
          href={user_info.socials.instagram}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaInstagram className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Instagram</span>
        </a>

        {/* =========== LINKEDIN =========== */}
        <a
          href={user_info.socials.linkedin}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on LinkedIn</span>
        </a>
      </div>

      <hr className="mt-6 w-72 border dark:border-zinc-800" />

      {/* =========== EMAIL =========== */}
      <a
        href={`mailto:${user_info.main.email}`}
        className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-300"
      >
        <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
        <span>{user_info.main.email}</span>
      </a>
    </section>
  );
}

export default Contact;