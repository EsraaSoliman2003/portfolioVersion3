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
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const menuItems = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    { to: "/about", label: "About", icon: <User size={18} /> },
    { to: "/projects", label: "Projects", icon: <Folder size={18} /> },
    { to: "/contact", label: "Contact", icon: <Mail size={18} /> },
    { to: "/experience", label: "Experience", icon: <Briefcase size={18} /> },
    { to: "/certificates", label: "Certificates", icon: <Award size={18} /> },
  ];

  const linkBaseStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "color 0.3s ease",
    color: "#333",
  };

  const activeLinkStyle = {
    color: "var(--primary-Mocha)",
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          width: { xs: "fit-content", md: "100%" },
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
          {/* Mobile Menu Button */}
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              display: {
                xs: "block",
                sm: "block",
              },
              "@media (min-width:769px)": {
                display: "none",
              },
              color: "var(--text-color)",
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <Menu size={45} />
          </IconButton>

          {/* Desktop Links */}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
              "@media (max-width:768px)": {
                display: "none",
              },
              "@media (min-width:769px)": {
                display: "flex",
              },
              gap: 4,
            }}
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                style={({ isActive }) => ({
                  ...linkBaseStyle,
                  ...(isActive ? activeLinkStyle : {}),
                })}
                className="nav-link"
              >
                {item.icon} {item.label}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
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
                style={({ isActive }) => ({
                  ...linkBaseStyle,
                  ...(isActive ? activeLinkStyle : {}),
                  paddingTop: "12px",
                  paddingBottom: "12px",
                })}
                className="nav-link"
              >
                {item.icon}
                <ListItemText primary={item.label} sx={{ marginLeft: "8px" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Hover styles in CSS */}
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
