import { GoogleGenAI } from "@google/genai";

// Fix: Initialize GoogleGenAI directly with the API key from environment variables as per guidelines.
// The API key is assumed to be pre-configured and available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * A placeholder function to simulate a chat with a Gemini-powered bot.
 * @param message The user's message.
 * @returns A simulated response from the AI.
 */
export const getGeminiChatResponse = async (message: string): Promise<string> => {
  // Fix: Removed redundant API key check, as its availability is a hard requirement.
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `You are an AI assistant for SustyDigi Marketers. A user is asking a question on the contact page. Keep your answer brief and helpful. User's question: "${message}"`,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I encountered an error while processing your request.";
  }
};