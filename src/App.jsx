import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Enter") {
        if (inputValue === "help") {
          setLogs([
            "identity       Reveal your true self",
            "discover       Uncover details about someone",
            "playvideo      Watch trending YouTube videos",
            "network        View your social media connections",
            "unlock         Find the secret passcode",
            "projects       Explore your coding endeavors",
            "replay         Review previous commands",
            "assistance     Get help with available commands",
            "contact        Reach out (but maybe don't)",
            "refresh        Clear the screen for a fresh start",
            "header         Show the terminal's welcoming header",
          ]);
        } else if (inputValue === "about") {
          setLogs([...logs, "it's just a website"]);
        } else if (inputValue === "clear") {
          setLogs([]);
        } else {
          setLogs([...logs, `no command found: ${inputValue}`]);
        }
        setInputValue("");
      } else if (e.key.length === 1) {
        setInputValue((prevValue) => prevValue + e.key);
      } else if (e.key === "Backspace") {
        setInputValue((prevValue) => prevValue.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [inputValue, logs]);

  return (
    <>
      <div>Welcome to my interactive web terminal</div>
      <div className="terminal">
        <div className="logs">
          {logs.map((log, index) => {
            return <div key={index}>{log}</div>;
          })}
        </div>
        <div className="input-area">
          <span>$ {inputValue}</span>
        </div>
      </div>
    </>
  );
}

export default App;
