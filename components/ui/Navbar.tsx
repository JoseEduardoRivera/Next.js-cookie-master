import {
  AppBar,
  IconButton,
  Toolbar,
  Link as MaterialLink,
  Typography,
} from "@mui/material";
import React from "react";
import { MenuOutlined } from "@mui/icons-material";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>
        <MaterialLink
          underline="none"
          color="white"
          component={NextLink}
          href="/"
        >
          <Typography variant="h6">Cookie Master</Typography>
        </MaterialLink>
        <div style={{ flex: 1 }}></div>
        <MaterialLink
          underline="none"
          color="white"
          component={NextLink}
          href="/theme-changer"
        >
          <Typography variant="h6">Cambiar Tema</Typography>
        </MaterialLink>
      </Toolbar>
    </AppBar>
  );
};
