import React, { useState } from 'react';
import axios from 'axios';
import './UserProfile.css';
import Navbar from '../../components/NavBar/NavBar';

interface Message {
  message_id: number;
  sender_id: number;
  receiver_id: number;
  message: string;
  created_at: string;
}

const UserProfile: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<Message[] | { message: string } | null>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        'http://localhost:3000/api/user/send/messages',
        {
          sender_id: 1,
          receiver_id: 2,
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Mensaje enviado exitosamente');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error al enviar el mensaje');
    }
  };

  const handleGetMessages = async (userId: number) => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post(
        'http://localhost:3000/api/user/get/messages',
        {
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResponse(res.data);
    } catch (error) {
      console.error('Error getting messages:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="messaging-container">
        <form className="message-form" onSubmit={handleSendMessage}>
          <div className="input-group">
            <label htmlFor="message" className="message-label">
              Mensaje:
            </label>
            <input
              type="text"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="message-input"
            />
          </div>
          <button type="submit" className="send-button">
            Enviar Mensaje
          </button>
        </form>
        <button className="get-messages-button" onClick={() => handleGetMessages(1)}>
          Obtener Mensajes de Usuario 1
        </button>
        <button className="get-messages-button" onClick={() => handleGetMessages(2)}>
          Obtener Mensajes de Usuario 2
        </button>
        <div className="messages-container">
          {response ? (
            Array.isArray(response) && response.length > 0 ? (
              response.map((msg) => (
                <div
                  key={msg.message_id}
                  className={msg.sender_id === 1 ? 'message-bubble sent' : 'message-bubble received'}
                >
                  <p className="message-content">{msg.message}</p>
                  <span className="timestamp">
                    {new Date(msg.created_at).toLocaleString()}
                  </span>
                </div>
              ))
            ) : (
              <p className="no-messages">{(response as { message: string }).message}</p>
            )
          ) : (
            <p className="no-messages">Cargando mensajes...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;

