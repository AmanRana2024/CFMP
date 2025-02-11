import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedback = { category, priority, description };

    try {
      await axios.post('https://<your-replit-username>.replit.app/feedback', feedback);
      alert('Feedback submitted');
    } catch (error) {
      console.error('Error submitting feedback', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="text" placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm; // Export the component