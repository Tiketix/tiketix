'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);        // 👈 stores full user object

  // pull from localStorage on first client render
  useEffect(() => {
    const cached = localStorage.getItem('tiketix_user');
    if (cached) setUser(JSON.parse(cached));
  }, []);

  function saveUser(u) {
    setUser(u);
    localStorage.setItem('tiketix_user', JSON.stringify(u));
    // When backend later returns a token, also call setAuthToken(token) here
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('tiketix_user');
    // setAuthToken(null);   
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, saveUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
