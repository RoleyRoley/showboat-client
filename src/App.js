import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Plans from "./components/Plans"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";


// Main routing component

function App() {
  const [user, setUser] = useState(null);

  // Track login status
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsub(); 
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Protect Plans page */}
        <Route
          path="/plans"
          element={user ? <Plans /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
