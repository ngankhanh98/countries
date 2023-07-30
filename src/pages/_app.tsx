import { MainLayout } from "@/components";

import "@/styles/globals.css";
import { Container } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";
import { ReactElement, ReactNode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const rubik = Rubik({ subsets: ["latin"] });

const theme = createTheme({
  typography: {
    fontFamily: [
      rubik.style.fontFamily,
      "-apple-system",
      "BlinkMacSystemFont",
      "Arial",
      "sans-serif",
    ].join(","),
    allVariants: {
      color: "#25317a !important",
      fontWeight: 500,
    },
    h1: {
      fontSize: "3.667em",
    },
    h2: {
      fontSize: "2.667em",
    },
    h3: {
      fontSize: "3.667em",
    },
    h4: {
      fontSize: "1.778em",
    },
    h5: {
      fontSize: "1.333em",
    },
    body1: {
      color: "#141414",
      fontWeight: 400,
      fontSize: 18,
    },
    body2: {
      color: "#141414",
      fontWeight: 400,
      fontSize: 18,
    },
  },
  palette: {
    primary: { main: "#25317a" },
    secondary: { main: "#c83c87" },
    common: { black: "#141414" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "39px",
          paddingLeft: "1.375rem",
          paddingRight: "1.375rem",
          ...(ownerState.variant === "contained" && {
            backgroundColor: "#c83c87",
            color: "white",
          }),
          ...(ownerState.variant === "outlined" && {
            borderColor: "#c83c87",
            color: "#c83c87",
            "&:hover": {
              color: "#c83c87",
            },
          }),
        }),
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        dot: {
          backgroundColor: grey[300],
        },
        dotActive: {
          backgroundColor: green[500],
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          color: ["body1"].includes(ownerState.variant!.toString())
            ? "#c83c87"
            : "#25317a",
          fontFamily: [
            rubik.style.fontFamily,
            "-apple-system",
            "BlinkMacSystemFont",
            "Arial",
            "sans-serif",
          ].join(","),
          fontWeight: 500,
          lineHeight: "1rem",
          ":hover": {
            color: ["body1"].includes(ownerState.variant!.toString())
              ? "#8b1554"
              : "#25317a",
            "text-decoration": ["body1"].includes(
              ownerState.variant!.toString()
            )
              ? "none"
              : "underline",
          },
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: `${red[600]} !important`,
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: process.env.NEXT_URI,
  cache: new InMemoryCache(),
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </ApolloProvider>
  );
}
