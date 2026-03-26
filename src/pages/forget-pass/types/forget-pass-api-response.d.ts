// Send Code
export interface SendCodeApiSuccessResponse {
  message: string;
  info: string;
}

export interface SendCodeApiErrorResponse {
  error: string;
}

export type SendCodeApiResponse =
  | SendCodeApiSuccessResponse
  | SendCodeApiErrorResponse;
