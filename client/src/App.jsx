import { Form } from "./Form.jsx";
import { Card } from "./Card.jsx";

let App = () => {
  return (
    <div>
      <h1>Goatify Me 🐐</h1>
      <div style={{display: "flex", flex: "wrap"}}>
        <Form style={{width: "45%"}} />
        <Card  style={{width: "45%"}}/>
      </div>
    </div>
  )
}

export { App };