export interface MuscleGroup {
  _id: string;
  name: string;
}

export interface Muscle {
  _id: string;
  name: string;
  image: string;
}

export interface MusclesResponse {
  message: string;
  muscleGroup: {
    _id: string;
    name: string;
  };
  muscles: Muscle[];
}

export interface MusclesGroupResponse {
  message: string;
  musclesGroup: MuscleGroup[];
}
