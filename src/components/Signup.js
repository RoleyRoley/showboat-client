import React, { useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// Allowing account creation with email and password

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup successful");
        } catch (error) {
            alert("Error: " + error.message);
        }
        
    };


    return (
        <div className="p-4 max-w-sm mx-auto">
            <h2 className="text-2xl font-bold">Signup</h2>
            <form onSubmit={handleSignup} className="flex flex-col gap-2">
                <input 
                    type="email"
                    className="border p-2"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type="password"
                    className="border p-2"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="bg-blue-600 text-white p-2 mt-2">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;