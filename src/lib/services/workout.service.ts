import type { MusclesGroupResponse, MusclesResponse } from "../types/muscles";
import type { AppLocale } from "../types/global";

export async function getMusclesGroupsService(
  locale: AppLocale,
): Promise<MusclesGroupResponse> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/muscles`, {
    headers: {
      "accept-language": locale,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch muscles");
  }
  return response.json();
}

export async function getMusclesService(
  id: string,
  locale: AppLocale,
): Promise<MusclesResponse> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/musclesGroup/${id}`,
    {
      headers: {
        "accept-language": locale,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch muscles");
  }
  return response.json();
}
