// src/components/AdminPanel.js

import React, { useState } from 'react';
import axios from 'axios';


const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming you have an API endpoint to handle content creation
      await axios.post('/api/tutorial', { title, content });
      alert('Tutorial content created successfully!');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating tutorial content:', error);
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Create Tutorial</button>
      </form>
    </div>
  );
};

export default AdminPanel;

