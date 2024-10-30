import React, { useState } from 'react';
import axios from 'axios';
import './UserProfile.css'; // Asegúrate de tener el archivo CSS para estilos
import Navbar from '../../components/NavBar/NavBar'

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
    <>
    <Navbar/>
    <div className="messaging-container">
      <form className="message-form" onSubmit={handleSendMessage}>
        <div className="input-group">
          <label htmlFor="message" className="message-label">Mensaje:</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="message-input"
          />
        </div>
        <button type="submit" className="send-button">Enviar Mensaje</button>
      </form>
      <button className="get-messages-button" onClick={() => handleGetMessages(1)}>
        Obtener Mensajes de Usuario 1
      </button>
      <button className="get-messages-button" onClick={() => handleGetMessages(2)}>
        Obtener Mensajes de Usuario 2
      </button>
      {response && <pre className="response-box">{JSON.stringify(response, null, 2)}</pre>}
    </div>
    </>
  );
};

export default UserProfile;