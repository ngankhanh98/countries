import { MainLayout } from "@/components";
import ContactForm from "@/components/ContactForm";
import { Box, Container } from "@mui/material";

export default function ContactUs(props: any) {
  return (
    <Box sx={{ background: "#F3F6F8" }} paddingY={4}>
      <Container>
        <ContactForm></ContactForm>
      </Container>
    </Box>
  );
}

ContactUs.getInitialProps = async (ctx: any) => {
  return { query: ctx.query };
};

ContactUs.getLayout = function getLayout(page: any) {
  const { query } = page.props;
  return <MainLayout title="Contact Us">{page}</MainLayout>;
};
