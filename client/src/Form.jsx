let Form = () => {
  return (
    <div style={formStyle}>
      <input style={inputStyle} type="text" id="fname" name="firstname" placeholder="Your name.." />
      <input style={inputStyle} type="text" id="fname" name="firstname" placeholder="Your name.." />
      <input style={inputStyle} type="text" id="fname" name="firstname" placeholder="Your name.." />
      <input style={inputStyle} type="text" id="fname" name="firstname" placeholder="Your name.." />
    </div>
  )
}

const formStyle = {
  width: "100%",
  fontFamily: "Arial",
  fontSize: "15px",
  border: "1px solid #eee",
  borderRadius: "5px",
  padding: "15px",
  margin: "15px",
  boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
}

const inputStyle = {
  width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box"
}

export { Form }