import { SessionOptions } from "iron-session";

export interface SessionData {
  isLoggedIn: boolean;
  user: {
    id: number;
    username: string;
    email: string;
    coins: number;
    premium: number | null;
    avatar: string;
    setup?: boolean;
    type: string;
    premiumType: string

  };
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
  user: {
    username: "",
    id: 0,
    email: "",
    coins: 0,
    premium: null,
    avatar: "",
    type: "free",
    setup: false,
    premiumType: ""
  },
};

export const sessionOptions: SessionOptions = {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "iron-examples-app-router-client-component-route-handler-swr",
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    secure: true,
  },
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
