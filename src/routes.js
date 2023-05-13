import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/dashboard";
import Register from "./modules/register";
import Login from "./modules/login";

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
