import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    image: "",
    firstName: "",
    lastName: "",
    title: "",
    course: "",
    expertise: "",
    qualification: "",
    bio: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      course: formData.course.split(",").map((item) => item.trim()),
      expertise: formData.expertise.split(",").map((item) => item.trim()),
      qualification: formData.qualification.split(",").map((item) => item.trim())
    };
    onSubmit(newUser);
    setFormData({ 
      image: "",
      firstName: "",
      lastName: "",
      title: "",
      course: "",
      expertise: "",
      qualification: "",
      bio: ""
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{width: "50%"}}>
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
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course (comma-separated)"
        />
        <input
          type="text"
          id="expertise"
          name="expertise"
          value={formData.expertise}
          onChange={handleChange}
          placeholder="Expertise (comma-separated)"
        />
        <input
          type="text"
          id="qualification"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          placeholder="Qualification (comma-separated)"
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
    </div>
  );
};

export { Form };