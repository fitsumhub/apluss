// src/components/blog/Blog.js
import React, { useState, useEffect } from "react";
import { getBlogPosts, deleteBlogPost } from "./../api/blogApi";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await deleteBlogPost(postId);
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
