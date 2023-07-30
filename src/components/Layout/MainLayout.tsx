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

// const breadcrumbs = [
//   {
//     title: "Homepage",
//     render: (props: any) => (
//       <Link
//         {...props}
//         underline="hover"
//         color="inherit"
//         href="/material-ui/getting-started/installation/"
//       >
//         {props.title}
//       </Link>
//     ),
//   },
//   {
//     title: "Countries",
//     render: (props: any) => (
//       <Typography
//         {...props}
//         underline="hover"
//         color="inherit"
//         href="/material-ui/getting-started/installation/"
//       >
//         {props.title}
//       </Typography>
//     ),
//   },
// ];
function MainLayout(props: any) {
  return (
    <main>
      <Header key={"header"} title="Countries" sections={headers}></Header>
      <Banner breadcrumbs={props.breadcrumbs}></Banner>
      {props.children}
      <Footer key={"footer"} title="Countries" sections={footers}></Footer>
    </main>
  );
}

export default MainLayout;
