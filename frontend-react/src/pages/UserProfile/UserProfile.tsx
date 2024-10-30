import React, { useState } from 'react';
import axios from 'axios';
import './UserProfile.css'; // Asegúrate de tener el archivo CSS para estilos

const UserProfile: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post(
        'http://localhost:3000/api/user/send/messages',
        {
          sender_id: 1,
          receiver_id: 2,
          message: message
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setResponse(res.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleGetMessages = async (userId: number) => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post(
        'http://localhost:3000/api/user/get/messages',
        {
          user_id: userId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setResponse(res.data);
    } catch (error) {
      console.error('Error getting messages:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSendMessage}>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar Mensaje</button>
      </form>
      <button onClick={() => handleGetMessages(1)}>Obtener Mensajes de Usuario 1</button>
      <button onClick={() => handleGetMessages(2)}>Obtener Mensajes de Usuario 2</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default UserProfile;