import React, { useState, useEffect } from 'react';
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
  const [response, setResponse] = useState<Message[]>([]);
  const [user, setUser] = useState<any>(null);
  const token = localStorage.getItem('token');

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    const user_id = user.user_id;
    const receiver_id = user_id === 1 ? 2 : 1;

    try {
      await axios.post(
        'http://localhost:3000/api/user/send/messages',
        {
          sender_id: user_id,
          receiver_id,
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('');
      handleGetMessages(); 
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error al enviar el mensaje');
    }
  };

  const handleGetMessages = async () => {
    if (!user) return;

    const user_id = user.user_id;
    const receiver_id = user_id === 1 ? 2 : 1;

    try {
      const res1 = await axios.post(
        'http://localhost:3000/api/user/get/messages',
        {
          user_id: user_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const res2 = await axios.post(
        'http://localhost:3000/api/user/get/messages',
        {
          user_id: receiver_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const combinedMessages = [...res1.data, ...res2.data];

      const sortedMessages = combinedMessages.sort((a, b) => 
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );

      setResponse(sortedMessages);
    } catch (error) {
      console.error('Error getting messages:', error);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      handleGetMessages();
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <Navbar />
      <div className="messaging-container">
        <button className="get-messages-button" onClick={handleGetMessages}>
          Actualizar Conversación
        </button>
        <div className="messages-container">
          {response.length > 0 ? (
            response.map((msg) => (
              <div
                key={msg.message_id}
                className={
                  msg.sender_id === user.user_id 
                    ? 'message-bubble sent' 
                    : 'message-bubble received'
                }
              >
                <p className="message-content">{msg.message}</p>
                <span className="timestamp">
                  {new Date(msg.created_at).toLocaleString()}
                </span>
              </div>
            ))
          ) : (
            <p className="no-messages">No hay mensajes.</p>
          )}
        </div>
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
      </div>
    </>
  );
};

export default UserProfile;








