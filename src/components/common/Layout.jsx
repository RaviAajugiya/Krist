import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout() {
  const location = useLocation();
  const isAuth = location.pathname !== "/auth";
  console.log(isAuth);
  return (
    <>
      {isAuth ? <Header /> : null}
      {/* <main className="h-svh lg:h-screen"> */}
        <Outlet />
      {/* </main> */}
      {isAuth ? <Footer /> : null}
    </>
  );
}

export default Layout;
