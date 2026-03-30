import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen bg-primary p-6 sm:p-10">
      <h1 className="text-3xl font-bold mb-4 text-tertiary">
        Micro Learning Challenge App
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter team code"
          onChange={(e) => setTeamCode(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
        />
      </div>
      <button
        onClick={() => alert(`Joining team with code: ${teamCode}`)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Join Team
      </button>
    </div>
  );
}

export default App;
