import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "./Form.jsx";
import { Card } from "./Card.jsx";

let App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    // let response = await axios.get("http://localhost:10000/api");
    let response = await axios.get("https://capstone-3cku.onrender.com/api");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFormSubmit = async (newUser) => {
    try {
      // let response = await axios.post("http://localhost:10000/api", newUser);
      let response = await axios.post("https://capstone-3cku.onrender.com/api", newUser);
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
        { data ? (<Card data={data} />) : (<p>Hello</p>)}
      </div>
    </div>
  );
};

export { App };
