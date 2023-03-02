import React, { useState, useEffect } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Toolbar,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import logo from "../assets/icon.svg";

const navItems = [
  {
    text: "Home",
  },
  {
    text: "About",
  },
  {
    text: "Projects",
  },
  {
    text: "Contact",
  },
];

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const changeLanguage = () => {
    let lang = i18next.language === "tr" ? "en" : "tr";
    i18next.changeLanguage(lang);
  };

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween gap="1.5rem">
          <img
            src={logo}
            style={{
              height: isNonMobile ? 40 : 30,
              width: isNonMobile ? 40 : 30,
            }}
            alt="Peglad."
          />
          {isNonMobile && (
            <List sx={{ display: "flex" }}>
              {navItems.map(({ text, icon }) => {
                const lcText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[200],
                      }}
                    >
                      <ListItemText primary={t(text)} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          )}
        </FlexBetween>

        {/* RIGHT SIDE */}

        <FlexBetween>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <Button
            onClick={changeLanguage}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.secondary[50],
              }}
            >
              {i18next.language}
            </Typography>
          </Button>
          {!isNonMobile && (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <MenuIcon sx={{ fontSize: "25px" }} />
            </IconButton>
          )}
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
