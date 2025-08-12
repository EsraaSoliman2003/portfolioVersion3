import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import CustomCursor from "../components/CustomCursor/CustomCursor";

const MainLayout = () => {
  const isDesktop = window.innerWidth > 768;
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    fetch("/api/visits")
      .then((res) => res.json())
      .then((data) => setVisits(data.visits))
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
          👀 Visitors: {visits === 0 ? "Loading..." : visits}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
