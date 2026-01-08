
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSpiderAdvice = async (situation: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a high-tech Spider-Man AI Assistant (like Karen or EDITH). 
      Provide tactical advice and a witty quip for the following situation: "${situation}".
      Respond in JSON format with 'advice' and 'quip'.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advice: { type: Type.STRING },
            quip: { type: Type.STRING },
          },
          required: ["advice", "quip"]
        }
      }
    });
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      advice: "Stay alert and keep your spider-sense sharp. Communication with headquarters lost.",
      quip: "Great, even the Wi-Fi is having a multiversal crisis."
    };
  }
};
