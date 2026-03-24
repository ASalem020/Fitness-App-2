export interface Muscle {
  _id: string;
  name: string;
}

export interface Muscles {
  message: string;
  muscleGroup: {
    _id: string;
    name: string;
  };
  muscles: [
    {
      _id: string;
      name: string;
      image: string;
    },
  ];
}

export interface MusclesResponse {
  message: string;
  musclesGroup: Muscle[];
}

export async function getMusclesGroupsService() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/muscles`);
  if (!response.ok) {
    throw new Error("Failed to fetch muscles");
  }
  return response.json();
}

export async function getMusclesService(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/musclesGroup/${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch muscles");
  }
  return response.json();
}
