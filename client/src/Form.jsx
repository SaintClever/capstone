let Form = () => {
  return (
    <form>
      <h3>Create</h3>
      <input type="text" id="firstName" name="firstName" placeholder="First Name" />
      <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
      <input type="text" id="title" name="title" placeholder="Title" />
      <input type="text" id="expertise" name="expertise" placeholder="Expertise" />
      <textarea id="bio" name="bio" placeholder=""></textarea>
      <button id="button">Gotify Me</button>
    </form>
  )
}

export { Form }