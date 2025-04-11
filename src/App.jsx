import { createRoot } from "react-dom/client";
import "./App.css";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function AppLayout() {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<AppLayout />);
