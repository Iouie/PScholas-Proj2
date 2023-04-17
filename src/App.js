import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Nav from "./components/Nav";
function App() {
  // K7T0BYX3IE3MBX89
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
