import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { HeadsetIcon, SendIcon, CloseIcon } from './icons/TechIcons';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! I'm SustyDigi's AI assistant. How can I help you learn about our services?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await getGeminiResponse(currentInput);
      const botMessage: Message = { sender: 'bot', text: responseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      const errorMessage: Message = { sender: 'bot', text: "I'm having some trouble right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-2">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
    </div>
  );

  return (
    <>
      {/* Chat Window */}
      <div className={`fixed bottom-24 right-5 sm:right-10 z-50 w-[calc(100%-2.5rem)] max-w-sm h-[60vh] max-h-[500px] shadow-2xl rounded-2xl flex flex-col bg-white/60 backdrop-blur-lg border border-gray-200 chat-window ${isOpen ? 'chat-window-visible' : 'chat-window-hidden'}`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="font-bold text-gray-800">SustyDigi Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-grow p-4 overflow-y-auto chat-messages space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-lg' : 'bg-gray-200 text-gray-800 rounded-bl-lg'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="max-w-[80%] p-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-lg">
                <TypingIndicator />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-gray-200">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 disabled:bg-indigo-300 transition-all duration-300 transform hover:scale-110"
              disabled={isLoading || !inputValue.trim()}
              aria-label="Send message"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 sm:right-10 z-50 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        aria-label="Toggle chat assistant"
      >
        {isOpen ? <CloseIcon className="w-8 h-8" /> : <HeadsetIcon className="w-8 h-8" />}
      </button>
    </>
  );
};

export default ChatAssistant;
