import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./Form.jsx";
import { Card } from "./Card.jsx";

let App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await axios.get("http://localhost:3000/api");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFormSubmit = async (newUser) => {
    try {
      let response = await axios.post("http://localhost:3000/api", newUser);
      setData((prevData) => [response.data, ...prevData]); // Add new user to top of list
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <h1>Goatify Me 🐐</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Form onSubmit={handleFormSubmit} />
        <Card data={data} />
      </div>
    </div>
  );
};

export { App };
