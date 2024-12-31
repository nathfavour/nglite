import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NGLite",
  description: "Anonymous web3 messaging platform",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FE6B8B",
    },
    secondary: {
      main: "#FF8E53",
    },
    background: {
      default: "#1e1e1e",
      paper: "#2d2d2d",
    },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
}
