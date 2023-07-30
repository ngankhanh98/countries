import { Container, Link, Typography, styled } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";

const headers = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
];

const footers = [
  {
    title: "About Us",
    url: "",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
  {
    title: "Terms & Conditions",
    url: "/contact-us",
  },
];
function MainLayout(props: any) {
  return (
    <main>
      <Header key={"header"} title="Countries" sections={headers}></Header>
      <Banner {...props}></Banner>
      {props.children}
      <Footer key={"footer"} title="Countries" sections={footers}></Footer>
    </main>
  );
}

export default MainLayout;
