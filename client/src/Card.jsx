import { useEffect, useState } from "react";
import axios from "axios";

let Card = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    let response = await axios.get("http://localhost:3000/api");
    console.log(response.data);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {
        data.map((user, index) => (
          <div key={index}>
            {
              Object.entries(user).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export { Card };