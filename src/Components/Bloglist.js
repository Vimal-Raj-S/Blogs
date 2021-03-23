import { Link } from "react-router-dom";
const Bloglist = ({ blogs, titles }) => {
  return (
    <div className="blog-list">
      <h2>{titles}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>the blog written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
