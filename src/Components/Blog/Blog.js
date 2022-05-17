import React from 'react';
import './Blog.css'

const Blog = (props) => {
    const {title, body} = props.blogItem;
    return (
                <div className="card__blog">
                    <div>
                        <h3 className="card__title">Blog Title: {title}</h3>
                        <p>{body}</p>
                    </div>
                </div>
    );
};

export default Blog;