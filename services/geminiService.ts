
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getLeadershipAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional leadership coach for teenagers. Give a concise, inspiring, and actionable piece of advice based on this request: ${userPrompt}. Keep the tone empowering and modern. Limit response to 3 sentences.`,
    });
    return response.text || "Keep leading with courage!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to my wisdom center. Try again in a moment!";
  }
};

export const getProgramRecommendation = async (interests: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Based on these interests: "${interests}", recommend one of these categories: 'Foundations' (for beginners/communication), 'Advanced Impact' (for projects/ethics), or 'Global Ambassadors' (for international/public speaking). Explain why in 2 sentences.`,
    });
    return response.text || "We recommend starting with our Foundations program to build a strong core.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Explore our programs to find the perfect fit for your journey!";
  }
};
