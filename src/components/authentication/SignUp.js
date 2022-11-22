import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { sendUserSignUpInformation } from "../../store/auth-thunke";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();

  const Email = useRef();
  const UserName = useRef();
  const Password = useRef();

  const history = useHistory();
  const requestResponse = useSelector((state) => state.signup.requestResponse);

  const redirectHandler = () => {
    history.push("/home");
  };

  const submitHandler = (event) => {
    const signUpData = {
      Email: Email.current.value,
      UserName: UserName.current.value,
      Password: Password.current.value,
    };
    event.preventDefault();
    dispatch(
      sendUserSignUpInformation(
        signUpData.Email,
        signUpData.UserName,
        signUpData.Password
      )
    );
  };

  if (requestResponse.length !== 0) {
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
    if (requestResponse === "signedup successfully") {
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={submitHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="username"
                  autoComplete="user-name"
                  inputRef={UserName}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={Email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={Password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
