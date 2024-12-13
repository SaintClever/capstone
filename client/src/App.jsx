import { Card } from "./Card.jsx";

let App = () => {
  return (
    <div style={{ display: "flex", flex: "wrap"}}>
      <h1>Goatify Me</h1>
      <div style={{width: "50%"}}>Input</div>
      <Card  style={{width: "25%"}}/>
    </div>
  )
}

export { App };