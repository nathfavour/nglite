
'use client';

import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#FE6B8B" },
    secondary: { main: "#FF8E53" },
    background: {
      default: "#1e1e1e",
      paper: "#2d2d2d",
    },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}