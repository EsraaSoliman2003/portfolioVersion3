// layouts/MainLayout.jsx
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import CustomCursor from "../components/CustomCursor/CustomCursor";

const MainLayout = () => {
  const isDesktop = window.innerWidth > 768;

  return (
    <>
      {isDesktop && <CustomCursor />}
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
