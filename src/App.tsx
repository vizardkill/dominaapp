import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => (
  <div className=" bg-amber-50">
    <Header />
    <main className="p-4 m-10">
      <Home />
    </main>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);