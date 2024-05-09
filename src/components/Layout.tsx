import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="layout">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
