import type { MusclesGroupResponse, MusclesResponse } from "../types/muscles";

export async function getMusclesGroupsService(): Promise<MusclesGroupResponse> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/muscles`);
  if (!response.ok) {
    throw new Error("Failed to fetch muscles");
  }
  return response.json();
}

export async function getMusclesService(id: string): Promise<MusclesResponse> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/musclesGroup/${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch muscles");
  }
  return response.json();
}
