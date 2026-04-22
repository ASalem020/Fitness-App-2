// import { ai } from "../constants/ai-initialize.constant";

// interface ApiError extends Error {
//   status?: number;
// }

// export async function getAIResponse(prompt: string, retries = 3, delay = 2000) {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.0-flash",
//       contents: prompt,
//     });
//     return response.text;
//   } catch (error) {
//     const apiError = error as ApiError;
//     const is429 =
//       apiError?.status === 429 || apiError?.message?.includes("429");

//     if (is429 && retries > 0) {
//       console.warn(
//         `Rate limited. Retrying in ${delay}ms... (${retries} retries left)`,
//       );
//       await new Promise((resolve) => setTimeout(resolve, delay));
//       return getAIResponse(prompt, retries - 1, delay * 2);
//     }

//     throw error;
//   }
// }
