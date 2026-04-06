import TextField from "@mui/material/TextField";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const signupSchema = yup.object({
  fullName: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Min 6 characters").required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Authentication = ({ isHaveAcouunt, setHaveAccount, setLogin }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    alert("hello");
    console.log("Signup:", data);
  };

  const onLogin = (data) => {
    setLogin(true);
    navigate("/dashboard");
  };

  return (
    <div className="form">
      <img
        style={{ width: "100px", height: "100px" }}
        src="/Klok-Brand-Logo.png"
        alt="logo"
      />

      <div>
        {isHaveAcouunt ? (
          <>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
            >
              <div>
                <Typography className="title" variant="h4">
                  Welcome Back!
                </Typography>
                <Typography className="title-para" variant="subtitle2">
                  Please Login to continue
                </Typography>
              </div>
              <div>
                <form
                  className="form-container"
                  onSubmit={handleLoginSubmit(onLogin)}
                >
                  <div className="inputs-container">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <div>
                        <EmailOutlinedIcon className="input-icon" />
                        <TextField
                          label="Email"
                          type="email"
                          fullWidth
                          {...loginRegister("email")}
                          error={!!loginErrors.email}
                          helperText={loginErrors.email?.message}
                        />
                      </div>

                      <div>
                        <HttpsOutlinedIcon className="input-icon" />
                        <TextField
                          type="password"
                          label="Password"
                          fullWidth
                          {...loginRegister("password")}
                          error={!!loginErrors.password}
                          helperText={loginErrors.password?.message}
                        />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          width: "100%",
                          gap: "4rem",
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Remember me"
                        />
                        <Link href="#">Forgot Password?</Link>
                      </div>
                    </div>
                  </div>
                  <Button type="submit" variant="contained" fullWidth>
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div>
                <Typography className="title" variant="h4">
                  Create your account
                </Typography>
                <Typography className="title-para" variant="subtitle2">
                  Join the timekeeping revolution
                </Typography>
              </div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="inputs-container">
                      <div>
                        <PermIdentityOutlinedIcon className="input-icon" />
                        <TextField
                          label="Full Name"
                          fullWidth
                          {...register("fullName")}
                          error={!!errors.fullName}
                          helperText={errors.fullName?.message}
                        />
                      </div>

                      <div>
                        <EmailOutlinedIcon className="input-icon" />
                        <TextField
                          label="Email"
                          fullWidth
                          {...register("email")}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      </div>

                      <div>
                        <HttpsOutlinedIcon className="input-icon" />
                        <TextField
                          type="password"
                          label="Password"
                          fullWidth
                          {...register("password")}
                          error={!!errors.password}
                          helperText={errors.password?.message}
                        />
                      </div>

                      <div>
                        <HttpsOutlinedIcon className="input-icon" />
                        <TextField
                          type="password"
                          label="Confirm Password"
                          fullWidth
                          {...register("confirmPassword")}
                          error={!!errors.confirmPassword}
                          helperText={errors.confirmPassword?.message}
                        />
                      </div>

                      <FormControlLabel
                        control={<Checkbox />}
                        label="I agree to the Terms of Service"
                      />
                    </div>
                    <Button type="submit" variant="contained" fullWidth>
                      Sign Up
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>

      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        {isHaveAcouunt ? "Don't have an account?" : "Already have an account?"}
        <Link component="button" onClick={() => setHaveAccount(!isHaveAcouunt)}>
          {isHaveAcouunt ? "Create Account" : "Login"}
        </Link>
      </p>
    </div>
  );
};

export default Authentication;
