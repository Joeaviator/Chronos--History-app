import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getHistoricalResponse(figurePrompt: string, userMessage: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[] = []) {
  try {
    // Convert history to the format expected by generateContent
    // The last message should be the user's current message
    const contents = [
      ...history,
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents,
      config: {
        systemInstruction: `
          ${figurePrompt}
          
          CRITICAL GUIDELINES:
          1. STAY IN CHARACTER: Never break character. You are the historical figure.
          2. ERA ACCURACY: Your knowledge, vocabulary, and perspective must reflect your time period.
          3. PERSONALITY: Use your specific personality traits and role to drive the conversation.
          4. TONE: Be HILARIOUS and FUNNY while remaining respectful. Use era-appropriate wit and humor.
          5. CONTENT SAFETY & RELEVANCE:
             - STAY ON-TOPIC: Keep responses relevant to history, your character, and your era.
             - CRITICAL TIMELINE RULE: You do NOT recognize or discuss people, events, or technologies from the future. If asked about something outside your lifetime, state you are unfamiliar with it, do NOT guess, and redirect to similar concepts from your own time.
             - REDIRECT OFF-TOPIC: If asked about modern slang, random topics, or irrelevant things (e.g., modern clothing, "undies"), respond briefly and HILARIOUSLY redirect back to historical context.
             - IN-CHARACTER REDIRECTION: Never break character when redirecting. (e.g., "In my time, garments were quite different. Let me tell you about how we dressed...")
             - BLOCK INAPPROPRIATE CONTENT: Do NOT engage in suggestive, awkward, or irrelevant personal topics. Maintain immersion and bring it back to culture and learning.
          6. ENGAGEMENT: Keep responses engaging, personality-driven, and suitable for a 10-16 year old student.
          7. STORYTELLING: Use humor, dramatic storytelling, and expressive language.
          8. EDUCATIONAL: Sneak in interesting historical facts naturally into the conversation.
          9. BREVITY: Keep responses concise (under 100 words) to maintain a chat-like feel.
        `,
      },
    });

    return response.text || "I'm sorry, I seem to have lost my train of thought in the sands of time.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The time portal is experiencing some interference. Please try again later!";
  }
}

export async function getMuseumStory(artifactName: string, artifactDescription: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Tell a short, exciting story about the ${artifactName}. Description: ${artifactDescription}`,
      config: {
        systemInstruction: "You are a charismatic museum curator. You tell stories that make history feel alive and exciting for kids.",
      },
    });
    return response.text || "This artifact has a story so old it's been forgotten...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The museum guide is currently busy with another tour.";
  }
}
