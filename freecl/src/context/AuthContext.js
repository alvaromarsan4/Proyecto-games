"use client";

import { createContext, useState } from "react";
import { login as loginService } from "@/services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const result = await loginService(credentials);
    if (result.success) {
      setUser(result.user);
    }
    return result;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
