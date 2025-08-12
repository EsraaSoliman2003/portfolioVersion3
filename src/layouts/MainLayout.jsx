import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import CustomCursor from "../components/CustomCursor/CustomCursor";

const MainLayout = () => {
  const isDesktop = window.innerWidth > 768;
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    const localFlagKey = "visitor-counted-date";
    const today = new Date().toDateString();
    const savedDay = localStorage.getItem(localFlagKey);

    async function incrementVisits() {
      if (savedDay !== today) {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_UPSTASH_URL}/incr/visits`,
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_UPSTASH_TOKEN}`,
              },
            }
          );
          const data = await res.json();
          setVisits(data.result);
          localStorage.setItem(localFlagKey, today);
        } catch (err) {
          console.error(err);
          setVisits("Error");
        }
      } else {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_UPSTASH_URL}/get/visits`,
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_UPSTASH_TOKEN}`,
              },
            }
          );
          const data = await res.json();
          setVisits(data.result);
        } catch (err) {
          console.error(err);
          setVisits("Error");
        }
      }
    }

    incrementVisits();
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
          👀 Visitors: {visits === null ? "Loading..." : visits}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
