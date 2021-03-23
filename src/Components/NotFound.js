const { Link } = require("react-router-dom");

const NotFound = () => {
  return (
    <div>
      <h1>404 -Not Found</h1>
      <Link to="/">back to home page</Link>
    </div>
  );
};

export default NotFound;
