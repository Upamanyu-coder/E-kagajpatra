import React, { useState } from "react";
import api from "../lib/axios";

const Test = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const testHealth = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await api.get("/health");
      setResult(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Backend Test</h1>
      <button
        onClick={testHealth}
        disabled={loading}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        {loading ? "Testing..." : "Test Backend Health"}
      </button>

      {result && (
        <pre
          style={{
            marginTop: "1rem",
            padding: "1rem",
            background: "#f0fdf4",
            border: "1px solid #22c55e",
            borderRadius: "4px",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}

      {error && (
        <pre
          style={{
            marginTop: "1rem",
            padding: "1rem",
            background: "#fef2f2",
            border: "1px solid #ef4444",
            borderRadius: "4px",
          }}
        >
          Error: {error}
        </pre>
      )}
    </div>
  );
};

export default Test;
