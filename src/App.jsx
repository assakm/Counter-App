
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("counter-theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("counter-theme", darkMode ? "dark" : "light");
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <main className="counter-app">
      <header className="header">
        <h1>Counter App</h1>

        <button
          className="theme-button"
          onClick={() => setDarkMode((previous) => !previous)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <section className="counter-card">
        <p className="subtitle">Keep track of your count</p>

        <div className="count">{count}</div>

        <div className="counter-buttons">
          <button onClick={() => setCount((previous) => previous - 1)}>
            − Decrement
          </button>

          <button className="reset-button" onClick={() => setCount(0)}>
            Reset
          </button>

          <button onClick={() => setCount((previous) => previous + 1)}>
            + Increment
          </button>
        </div>

        <p className="theme-status">
          Current theme: <strong>{darkMode ? "Dark" : "Light"}</strong>
        </p>
      </section>

      <footer>Built with React and useState</footer>
    </main>
  );
}

export default App;
