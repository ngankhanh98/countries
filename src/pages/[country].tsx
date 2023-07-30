import { MainLayout } from "@/components";
import { Box, Typography, Link } from "@mui/material";
import { breadcrumbs } from "./index";

export default function CountryPage(props: any) {
  return <Box></Box>;
}

CountryPage.getInitialProps = async (ctx: any) => {
  return { query: ctx.query };
};


CountryPage.getLayout = function getLayout(page: any) {
  console.log('page', page)
  return (
    <MainLayout breadcrumbs={breadcrumbs}>
      {page}
    </MainLayout>
  );
};
