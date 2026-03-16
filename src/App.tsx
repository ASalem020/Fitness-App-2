import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layout/root-layout";
import Home from "./pages/home";
import About from "./pages/about";
import Classes from "./pages/classes";
import Healthy from "./pages/healthy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="classes" element={<Classes />} />
        <Route path="healthy" element={<Healthy />} />
      </Route>
    </Routes>
  );
}

export default App;
