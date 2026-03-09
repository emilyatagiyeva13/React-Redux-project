import React, { useEffect, useState } from 'react';
import blogs from "../../js/blogData.js";
import "../../css/blog.css"
import { DotLoader, MoonLoader } from 'react-spinners';

// s

const Blog = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const myTimer = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(myTimer)
    }, [])

    if (loading) {
        return <div className="loader-container">
            <DotLoader color="#15803D" size={60} />
        </div>
    }

    return (
        <>
            <div className="container-fluid">
                <h1 className="mb-4 text-center border-bottom pb-3 ">Blog</h1>

                <div className="row">
                    {blogs.map((item) => (
                        <div className="col-md-8 container"
                            key={item.id}>
                            <div className="blog-card">
                                <img
                                    src={item.image}
                                    className="rounded"
                                    width={1000}
                                />
                                <div className="description-blog">
                                    <h2 className="mt-4" style={{ width: "100%" }}>{item.blog_header}</h2>
                                    <p>{item.description}</p>
                                    <span className='read-more '>Read More</span>
                                    <div className="text-muted d-flex gap-5 my-4">
                                        <span>{item['publish-date']}</span>
                                        <span>{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;