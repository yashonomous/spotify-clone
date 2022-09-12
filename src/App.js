import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home isAlbumPage={false} />} />
      <Route path="/album/:id" element={<Home isAlbumPage={true} />} />
      <Route path="/playlist/:id" element={<Home isAlbumPage={true} />} />
    </Routes>
  );
}

export default App;
