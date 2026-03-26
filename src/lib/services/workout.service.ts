import type { MusclesGroupResponse, MusclesResponse } from "../types/muscles";

export async function getMusclesGroupsService(): Promise<MusclesGroupResponse> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/muscles`, {
    headers: {
      "accept-language": "en",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch muscles");
  }
  return response.json();
}

export async function getMusclesService(id: string): Promise<MusclesResponse> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/musclesGroup/${id}`,
    {
      headers: {
        "accept-language": "en",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch muscles");
  }
  return response.json();
}
