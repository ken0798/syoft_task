import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./modules/auth";
import Home from "./modules/dashboard";

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<App />} />
        <Route path="/login" element={<App />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
