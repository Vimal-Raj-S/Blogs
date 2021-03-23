import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>BLOGS</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create" style={blogColour}>
          New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

const blogColour = {
  color: "white",
  backgroundColor: "#f1356d",
  borderRadius: "8px",
};
