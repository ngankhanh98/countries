import {
  ERROR_MESSAGE_MAX_LENGTH,
  ERROR_MESSAGE_REQUIRED,
} from "@/constants/message";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .required(ERROR_MESSAGE_REQUIRED("Email"))
    .max(40, ERROR_MESSAGE_MAX_LENGTH("Email", 40))
    .email(),
  firstName: yup
    .string()
    .required(ERROR_MESSAGE_REQUIRED("First Name"))
    .max(40, ERROR_MESSAGE_MAX_LENGTH("First Name", 40)),
  lastName: yup
    .string()
    .required(ERROR_MESSAGE_REQUIRED("Last Name"))
    .max(40, ERROR_MESSAGE_MAX_LENGTH("Last Name", 40)),
});

function ContactForm(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      firstName: "Khanh",
    },
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<any> = (data: any) => {
    alert("Sending email data: " + JSON.stringify(data));
  };

  return (
    <Box>
      <Typography variant="h2" paddingY={2}>
        Get in touch
      </Typography>
      <Typography variant="body1" paddingY={2}>
        Please use the form below to get in touch with us.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            error={!!errors.firstName}
            helperText={(errors.firstName?.message || "")!.toString()}
            {...register("firstName")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            error={!!errors.lastName}
            helperText={(errors.lastName?.message || "")!.toString()}
            {...register("lastName")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            error={!!errors.email}
            helperText={(errors.email?.message || "")!.toString()}
            {...register("email")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            error={!!errors.address1}
            helperText={(errors.address1?.message || "")!.toString()}
            {...register("address1")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            error={!!errors.city}
            helperText={(errors.city?.message || "")!.toString()}
            {...register("city")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            {...register("state")}
            error={!!errors.state}
            helperText={(errors.state?.message || "")!.toString()}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            {...register("zip")}
            error={!!errors.zip}
            helperText={(errors.zip?.message || "")!.toString()}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            {...register("country")}
            error={!!errors.country}
            helperText={(errors.country?.message || "")!.toString()}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }} paddingY={4}>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Send message
        </Button>
      </Box>
    </Box>
  );
}

ContactForm.propTypes = {};

export default ContactForm;
