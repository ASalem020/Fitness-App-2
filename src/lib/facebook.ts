// ─── Facebook SDK Types ──────────────────────────────────────────────────────

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (params: {
        appId: string;
        cookie?: boolean;
        xfbml?: boolean;
        version: string;
      }) => void;
      login: (
        callback: (response: FBAuthResponse) => void,
        options?: { scope: string }
      ) => void;
      api: (
        path: string,
        params: { fields: string },
        callback: (response: FBUserProfile) => void
      ) => void;
    };
  }
}

interface FBAuthResponse {
  status: "connected" | "not_authorized" | "unknown";
  authResponse?: {
    accessToken: string;
    userID: string;
  };
}

export interface FBUserProfile {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
  picture?: {
    data: {
      url: string;
    };
  };
}

// ─── Initialize Facebook SDK ──────────────────────────────────────────────────

const FB_APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID || "YOUR_FACEBOOK_APP_ID";
const FB_VERSION = "v19.0";

export function initFacebook(): Promise<void> {
  return new Promise((resolve) => {
    if (window.FB) {
      resolve();
      return;
    }

    window.fbAsyncInit = () => {
      window.FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: FB_VERSION,
      });
      resolve();
    };

    // Dynamically load the Facebook SDK script
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  });
}

// ─── Login & Fetch Profile ────────────────────────────────────────────────────

export async function loginWithFacebook(): Promise<FBUserProfile | null> {
  await initFacebook();

  return new Promise((resolve) => {
    window.FB.login(
      (authResponse) => {
        if (authResponse.status === "connected") {
          // Fetch user profile data
          window.FB.api(
            "/me",
            { fields: "id,first_name,last_name,email,picture.type(large)" },
            (profile) => {
              resolve(profile);
            }
          );
        } else {
          // User cancelled login or did not authorize
          resolve(null);
        }
      },
      { scope: "email,public_profile" }
    );
  });
}
