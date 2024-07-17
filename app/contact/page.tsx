'use client'
import React, { useEffect, useState } from 'react';
import { getAllMessages } from '@/components/form';
import "@/public/styles/MessagesPage.css";

const MessagesPage: React.FC = () => {
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await getAllMessages();
            if (response.success) {
                setMessages(response.messages);
            } else {
                console.error('Failed to fetch messages:');
            }
        } catch (error) {
            console.error('Failed to fetch messages:');
        }
    };

    return (
        <div className="messages-container">
            <div className='messages'>
                <h2 className="title">All Messages</h2>
                <div className="messages-list">
                    {messages.map((message, index) => (
                        <div key={index} className="message-item">
                            <h3>{message.name}</h3>
                            <p>Email: {message.email}</p>
                            <p>Message: {message.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MessagesPage;
