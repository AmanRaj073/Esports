import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./App.css"
import Test from "./pages/Test";
import Shop from "./pages/Shop";
import Esports from "./pages/Esports";
import Content from "./pages/Content";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/esports" element={<Esports/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/content" element={<Content />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test/>} />
      </Routes>
      </div>
  );
}

export default App;
