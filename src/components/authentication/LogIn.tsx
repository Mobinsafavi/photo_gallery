import React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Swal from "sweetalert2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "src/store/hooks";
import LoginForm from "./LoginForm";

const theme = createTheme();

const SignIn = () => {
  const history = useHistory();
  const requestResponse = useAppSelector((state) => state.auth.requestResponse);

  const redirectHandler = () => {
    history.push("/home");
  };

  if (requestResponse) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    if (requestResponse === "loggedin successfully") {
      Toast.fire({
        icon: "success",
        title: requestResponse,
      });
      setTimeout(redirectHandler, 3000);
    } else {
      Toast.fire({
        icon: "error",
        title: requestResponse,
      });
    }
  } 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <LoginForm></LoginForm>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
