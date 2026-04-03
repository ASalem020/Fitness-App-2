import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function talkToGemini(message: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: message,
  });

  return {
    role: "bot",
    message: response.text ?? "I'm sorry, I can't answer that question.",
  };
}
