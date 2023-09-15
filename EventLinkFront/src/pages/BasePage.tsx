import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

const BasePage = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />

      {/* Same as */}
      <div className="flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { BasePage };
