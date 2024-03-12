import React, { useState } from "react";
import axios from "axios";
import "./all.css";

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = "7143655400:AAHzmrJrA5YZiP7sjx9gt0xbndJdlFvRAQ0";
      const chatId = "@formdatea";
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: `First Name: ${formData.firstName}Last Name: ${formData.lastName}
        Message: ${formData.message}`,
      });

      setFormData({
        firstName: "",
        lastName: "",
        message: "",
      });
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      alert("Ma'lumotlarni yuborishda xatolik yuz berdi.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit">Yuborish</button>
    </form>
  );
};

export default MyFormComponent;
