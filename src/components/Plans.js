// src/components/Plans.js
import React from "react";

/**
 * Plans page, only accessible by logged-in users.
 */
function Plans() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Choose Your SHOWBOAT Plan</h1>
      <p>This is a protected page. Only logged-in users can access it.</p>
    </div>
  );
}

export default Plans;
