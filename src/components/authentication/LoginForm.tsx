import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "../ui/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendUserLogInInformation } from "../../store/auth-thunke";
import { IAuthData } from "../../interfaces";
import { useAppDispatch } from "src/store/hooks";
import * as yup from "yup";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<IAuthData>();
  const onSubmit: SubmitHandler<IAuthData> = (data) => {
    dispatch(sendUserLogInInformation(data));
  };
  
  const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  }).required();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField label="username" register={register} required />
      <TextField label="password" register={register} required />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item>
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
