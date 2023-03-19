import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyModal from "./components/MyModal";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen justify-between items-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<MyModal />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
