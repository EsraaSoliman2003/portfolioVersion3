// layouts/MainLayout.jsx
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import CustomCursor from "../components/CustomCursor/CustomCursor";

const MainLayout = () => {
  const isDesktop = window.innerWidth > 768;
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/esraa-ebrahim-soliman-site/visits")
      .then((res) => res.json())
      .then((data) => setVisits(data.value))
      .catch((err) => console.error(err));
  }, []);

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
        <div
          style={{
            color: "#999",
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
        >
          👀 Visitors: {visits}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
