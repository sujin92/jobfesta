import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지 로드 시 /cw2024로 리다이렉트
    navigate("/cw2024");
  }, [navigate]);

  return (
    <div className="App">
      <h1>Redirecting to /cw2024...</h1>
    </div>
  );
}

export default App;
