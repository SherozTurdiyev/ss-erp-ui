import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
  import { BrowserRouter, Route, Routes } from "react-router-dom";

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<h1>Index Page</h1>} />
            <Route path="/main" element={<h1>Index Page</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
