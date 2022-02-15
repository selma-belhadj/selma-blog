import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
 const { data: blogs, IsPending, error } = useFetch('http://localhost:8000/blogs')
  
  return (
    <div className="home">
        {error && <div> {error} </div>  }
        {IsPending && <p>Loading ... </p>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;