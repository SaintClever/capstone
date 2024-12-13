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
        <div key={user.firstName} className="cardStyle">
          <img 
            src={user.image} 
            alt={`${user.firstName} ${user.lastName}`} 
            className="imageStyle" 
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

export { Card };