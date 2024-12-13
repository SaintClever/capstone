import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    image: "",
    firstName: "",
    lastName: "",
    title: "",
    expertise: "",
    bio: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      expertise: formData.expertise.split(",").map((item) => item.trim())
    };
    onSubmit(newUser);
    setFormData({ image: "", firstName: "", lastName: "", title: "", expertise: "", bio: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create</h3>
      <input
        type="text"
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image"
        required
      />
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        id="expertise"
        name="expertise"
        value={formData.expertise}
        onChange={handleChange}
        placeholder="Expertise (comma-separated)"
      />
      <textarea
        id="bio"
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="Bio"
      />
      <button id="button" type="submit">Gotify Me</button>
    </form>
  );
};

export { Form };