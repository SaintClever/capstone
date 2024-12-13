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
      await axios.post("http://localhost:3000/api", newUser);
      getData();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <h1>Goatify Me 🐐</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Form onSubmit={handleFormSubmit} style={{ width: "35%" }} />
        <Card data={data} style={{ width: "45%" }} />
      </div>
    </div>
  );
};

export { App };
