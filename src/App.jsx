import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Header />
      <About />
      <Footer />
    </div>
  );
}
