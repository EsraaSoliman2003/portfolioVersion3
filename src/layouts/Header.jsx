// Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Folder, Mail, Briefcase, Award, Menu } from "lucide-react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "../styles/colors.css";

function Header() {
  // State for mobile drawer visibility
  const [open, setOpen] = useState(false);

  // Function to toggle drawer state
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  // Navigation menu items (label, icon, link)
  const menuItems = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/about", label: "About", icon: <User size={18} /> },
    { to: "/projects", label: "Projects", icon: <Folder size={18} /> },
    { to: "/contact", label: "Contact", icon: <Mail size={18} /> },
    { to: "/technologies", label: "Technologies", icon: <Briefcase size={18} /> },
    // { to: "/certificates", label: "Certificates", icon: <Award size={18} /> },
  ];

  return (
    <>
      {/* Main App Bar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          // width: { xs: "fit-content", md: "100%" },
          direction: "rtl",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "center",
            gap: 3,
            minHeight: "45px !important",
            direction: "ltr",
          }}
        >
          {/* Mobile Menu Icon Button */}
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", sm: "block" },
              "@media (min-width:769px)": { display: "none" },
              color: "var(--text-color)",
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <Menu size={45} />
          </IconButton>
          {/* Mobile Drawer Menu */}
          <Drawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
              ".MuiDrawer-paper": { backgroundColor: "var(--text-color)" },
            }}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.to} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={item.to}
                    onClick={toggleDrawer(false)}
                    style={{
                      color: "var(--primary-Mocha)",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                    className="nav-link"
                  >
                    {item.icon}
                    <ListItemText
                      primary={item.label}
                      sx={{ marginLeft: "8px", color: "var(--primary-Mocha)" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          {/* Desktop Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              "@media (max-width:768px)": { display: "none" },
              "@media (min-width:769px)": { display: "flex" },
              gap: 4,
            }}
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  transition: "color 0.3s ease",
                  color: window.innerWidth > 768 && "var(--primary-dark)",
                  ...(isActive && { color: "var(--primary-Mocha)" }),
                })}
                className="nav-link"
              >
                {item.icon} {item.label}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hover Styles */}
      <style>
        {`
          .nav-link:hover {
            color: var(--primary-Mocha) !important;
          }
        `}
      </style>
    </>
  );
}

export default Header;
