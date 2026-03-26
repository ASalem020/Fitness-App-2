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

// Verify Code

export interface VerifyCodeApiSuccessResponse {
  status: string;
}

export interface VerifyCodeApiErrorResponse {
  error: string;
}

export type VerifyCodeApiResponse =
  | VerifyCodeApiSuccessResponse
  | VerifyCodeApiErrorResponse;
