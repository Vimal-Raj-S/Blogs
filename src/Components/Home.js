import Bloglist from "./Bloglist";
import useFetch from "./usefetch";

const Home = () => {
  const { data, isPending } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {isPending && <div>Loading.... </div>}
      {data && <Bloglist blogs={data} titles="ALL BLOGS" />}
    </div>
  );
};

export default Home;
