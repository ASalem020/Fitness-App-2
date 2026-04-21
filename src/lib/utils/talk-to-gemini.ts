import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function talkToGemini(message: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
    });

    return {
      role: "bot",
      message: response.text ?? "I'm sorry, I can't answer that question.",
    };
  } catch (error) {
    console.error(error);
    return {
      role: "bot",
      message: "ai chat bot not available now , try again later",
    };
  }
}
