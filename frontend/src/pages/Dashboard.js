import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSecureData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/protected', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setMessage(res.data.message);
      } catch (err) {
        setMessage('Unauthorized. Please login again.');
      }
    };

    fetchSecureData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
    </div>
  );
}

export default Dashboard;
