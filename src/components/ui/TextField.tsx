import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { TextField } from "@mui/material";
import { IAuthData } from "src/interfaces";

// export interface IFormValues {
//   username: string;
//   password: string;
// }

type InputProps = {
  label: Path<IAuthData>;
  register: UseFormRegister<IAuthData>;
  required: boolean;
};

const TextFieldComponent = ({ label, register, required }: InputProps) => {
  return (
    <TextField required label={label} {...register(label, { required })} />
  );
};

export default TextFieldComponent;
