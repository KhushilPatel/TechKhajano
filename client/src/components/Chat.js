// Chat.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FullPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 80vh;
  width: 80vw;
  margin:auto;
  border: 1px solid #ccc;
  overflow: hidden;
`;

const ChatHeader = styled.div`
  background-color: #232f3e;
  color: white;
  padding: 15px;
  font-size: 18px;
  text-align: center;
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  background-color: ${(props) => (props.isUser ? '#cce5ff' : '#e2e2e2')};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  max-width: 80%;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
  font-size: 16px;
`;

const SendButton = styled.button`
  padding: 10px 15px;
  background-color: #232f3e;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #4a5f75;
  }
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    // Mock response from the bot
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'This is a response from the bot.', isUser: false },
      ]);
    }, 1000);
  };

  return (
    <FullPageContainer>
      <ChatHeader>Chat Application</ChatHeader>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index} isUser={message.isUser}>
            {message.text}
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </InputContainer>
    </FullPageContainer>
  );
};

export default Chat;
