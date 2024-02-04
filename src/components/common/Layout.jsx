import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { URL } from "../config/URLHelper";

function Layout() {
  const location = useLocation();
  const isAuth = location.pathname !== URL.AUTH;

  return (
    <>
      {isAuth ? <Header /> : null}
      <main className="min-h-[calc(100vh-316px-80px)] max-h-full">
        <Outlet />
      </main>
      {isAuth ? <Footer /> : null}
    </>
  );
}

export default Layout;
