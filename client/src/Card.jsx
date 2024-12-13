const Card = ({ data }) => {
  return (
    <div className="cardStyle">
      {data.map((user) => (
        <div key={user.firstName}>
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