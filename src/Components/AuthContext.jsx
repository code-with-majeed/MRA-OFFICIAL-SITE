// import React, { createContext, useState, useContext } from "react";

// // 1. Context create karo
// const AuthContext = createContext();

// // 2. Provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const API_URL = process.env.REACT_APP_API_URL; // .env se URL

//   // Login function
//   const login = async (email, password) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${API_URL}/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       setUser(data.user); // user info store karo
//       setLoading(false);
//       return { success: true, user: data.user };
//     } catch (error) {
//       setLoading(false);
//       return { success: false, message: error.message };
//     }
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // 3. Custom hook for easy access
// export const useAuth = () => useContext(AuthContext);
