export interface KYCState {
  gender: string;
  age: number;
  weight: number;
  height: number;
  goal: string;
  activityLevel: string;
}

export type KYCAction =
  | { type: "SET_GENDER"; payload: string }
  | { type: "SET_AGE"; payload: number }
  | { type: "SET_WEIGHT"; payload: number }
  | { type: "SET_HEIGHT"; payload: number }
  | { type: "SET_GOAL"; payload: string }
  | { type: "SET_LEVEL"; payload: string };
