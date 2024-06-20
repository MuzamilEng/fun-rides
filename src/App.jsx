import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
