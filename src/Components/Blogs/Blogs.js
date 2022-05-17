import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    const [blog, setBlog] = useState([]);
    const [startBlog, setStartBlog] = useState();
    const [endBlog, setEndBlog] = useState(10);
    const [pleaseWait, setPleaseWait] = useState(true);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=> res.json())
        .then(data => {setBlog(data); setPleaseWait(false);});
    }, [])

    const PageNo = (startBlog, endBlog) => {
        setStartBlog(startBlog);
        setEndBlog(endBlog);
    }

    return (
      <>
        {pleaseWait && <h1>Please Wait for loading...</h1>}
        <div className="container blogs__show">
          <div>
            <h2 className="blog__title">All Blogs</h2>
          </div>
          <div className="pageNo__container">
            <button onClick={() => PageNo(0, 10)}>1</button>
            <button onClick={() => PageNo(10, 20)}>2</button>
            <button onClick={() => PageNo(20, 30)}>3</button>
            <button onClick={() => PageNo(31, 40)}>4</button>
            <button onClick={() => PageNo(41, 50)}>5</button>
            <button onClick={() => PageNo(51, 60)}>6</button>
            <button onClick={() => PageNo(61, 70)}>7</button>
          </div>
          <div className="blogs__container">
            {blog.slice(startBlog, endBlog).map((blogItem) => (
              <Blog key={blogItem.id} blogItem={blogItem}></Blog>
            ))}
          </div>
        </div>
      </>
    );
};

export default Blogs;