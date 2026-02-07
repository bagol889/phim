
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getRomanticSuggestion = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short, sincere, and minimalist Valentine's message based on this context: "${prompt}". 
      Requirements:
      - Tone: Thoughtful, sincere, calm, emotionally resonant.
      - Avoid: Slang, excessive emojis, cliches, or "cringey" drama.
      - Max 3 sentences.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I appreciate you more than words can say.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Thank you for the kindness and warmth you bring into my life.";
  }
};
