import { useEffect, useState } from "react";
import axios from "axios";

let Card = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await axios.get("http://localhost:3000/api");
    console.log(response.data);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      {data.map((user) => (
        <div key={user.firstName} style={cardStyle}>
          <img 
            src={user.image} 
            alt={`${user.firstName} ${user.lastName}`} 
            style={imageStyle} 
          />
          <h3>{user.firstName} {user.lastName}</h3>
          <p><strong>Title:</strong> {user.title}</p>
          <p><strong>Course:</strong> {user.course}</p>
          <p><strong>Expertise:</strong> {user.expertise.join(", ")}</p>
          <p><strong>Qualification:</strong> {user.qualification}</p>
          <p>{user.bio}</p>
        </div>
      ))}
    </div>
  );
};

const cardStyle = {
  fontFamily: "Arial",
  fontSize: "15px",
  border: "1px solid #eee",
  borderRadius: "5px",
  padding: "15px",
  margin: "15px",
  boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
  // textAlign: "center",
};

const imageStyle = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  objectFit: "cover",
};

export { Card };