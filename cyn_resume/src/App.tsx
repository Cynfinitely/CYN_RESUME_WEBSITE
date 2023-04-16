import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen justify-between items-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
