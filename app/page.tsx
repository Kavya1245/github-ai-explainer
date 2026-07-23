"use client";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleExplain = async () => {
    if (!username) return;
    
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to fetch data");
      } else {
        setResult(data);
      }
    } catch (err) {
      setError("Something went wrong. Check your terminal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">👨‍💻 AI GitHub Profile Explainer</h1>
        <p className="text-gray-500 mb-6 text-center">Type any GitHub username to get an AI summary of who they are!</p>
        
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g., torvalds"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleExplain}
            disabled={loading || !username}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {loading ? "Thinking..." : "Explain"}
          </button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {result && (
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <img src={result.rawGitHubData.avatar} alt="Avatar" className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-xl font-bold text-gray-800">{result.rawGitHubData.name || username}</h2>
                <p className="text-sm text-gray-500">{result.rawGitHubData.bio || "No bio available"}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-center">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-blue-600">{result.rawGitHubData.publicRepos}</p>
                <p className="text-xs text-gray-500 uppercase">Public Repos</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-blue-600">{result.rawGitHubData.followers}</p>
                <p className="text-xs text-gray-500 uppercase">Followers</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">🤖 AI Explanation:</h3>
              <p className="text-gray-700">{result.aiExplanation}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}