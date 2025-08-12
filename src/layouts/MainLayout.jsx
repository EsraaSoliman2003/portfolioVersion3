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
      <main
        style={{
          padding: window.innerWidth > 768 ? "100px 0" : "20px 0",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
