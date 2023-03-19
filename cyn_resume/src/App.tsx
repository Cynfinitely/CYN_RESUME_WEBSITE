import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen justify-between items-center">
        <div>HEADER</div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
