import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

const BasePage = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export { BasePage };
