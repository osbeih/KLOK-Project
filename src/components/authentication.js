import TextField from "@mui/material/TextField";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

import { registerUser, loginUser } from "../mockAuth";


const signupSchema = yup.object({
  fullName: yup.string().required(i18n.t("Name is required")),
  email: yup.string().email(i18n.t("Invalid email")).required(i18n.t("Email is required")),
  password: yup.string().min(6, i18n.t("Min 6 characters")).required(i18n.t("Required")),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], i18n.t("Passwords must match"))
    .required(i18n.t("Required")),
});

const loginSchema = yup.object({
  email: yup.string().email(i18n.t("Invalid email")).required(i18n.t("Email is required")),
  password: yup.string().required(i18n.t("Password is required")),
});

const Authentication = ({ isHaveAccount, setHaveAccount, setLogin }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
    const result = registerUser(data);
    if (result.success) {
      setErrorMsg("");
      setHaveAccount(true);
      setOpen(true);
    } else {
      setErrorMsg(result.message);
      setOpenError(true);
    }
  };

  const onLogin = (data) => {
    const result = loginUser(data.email, data.password);
    if (result.success) {
      setLogin(true);
      navigate("/dashboard");
    } else {
      setErrorMsg(result.message);
      setOpenError(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenError(false);
  };

  return (
    <div className="form">
      <img
        style={{ width: "100px", height: "100px" }}
        src="/Klok-Brand-Logo.png"
        alt="logo"
      />

      <div>
        {isHaveAccount ? (
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <Typography className="title" variant="h4">
                  {t("Welcome Back")}
                </Typography>
                <Typography className="title-para" variant="subtitle2">
                  {t("Please Login to continue")}
                </Typography>
              </div>

              <div>
                <form className="form-container" onSubmit={handleLoginSubmit(onLogin)}>
                  <div className="inputs-container">
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div>
                        <EmailOutlinedIcon className="input-icon" />
                        <TextField
                          label={t("Email")}
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
                          label={t("Password")}
                          fullWidth
                          {...loginRegister("password")}
                          error={!!loginErrors.password}
                          helperText={loginErrors.password?.message}
                        />
                      </div>

                      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%", gap: "4rem" }}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={t("Remember me")}
                        />
                        <Link href="#">{t("Forgot Password?")}</Link>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" variant="contained" fullWidth>
                    {t("Login")}
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
                  {t("Create your account")}
                </Typography>
                <Typography className="title-para" variant="subtitle2">
                  {t("Join the timekeeping revolution")}
                </Typography>
              </div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="inputs-container">
                      <div>
                        <PermIdentityOutlinedIcon className="input-icon" />
                        <TextField
                          label={t("Full Name")}
                          fullWidth
                          {...register("fullName")}
                          error={!!errors.fullName}
                          helperText={errors.fullName?.message}
                        />
                      </div>

                      <div>
                        <EmailOutlinedIcon className="input-icon" />
                        <TextField
                          label={t("Email")}
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
                          label={t("Password")}
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
                          label={t("Confirm Password")}
                          fullWidth
                          {...register("confirmPassword")}
                          error={!!errors.confirmPassword}
                          helperText={errors.confirmPassword?.message}
                        />
                      </div>

                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("I agree to the Terms of Service")}
                      />
                    </div>

                    <Button type="submit" variant="contained" fullWidth>
                      {t("Sign Up")}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>

      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        {isHaveAccount ? t("Don't have an account?") : t("Already have an account?")}
        <Link component="button" onClick={() => setHaveAccount(!isHaveAccount)}>
          {isHaveAccount ? t("Create Account") : t("Login")}
        </Link>
      </p>

      {/* Snackbar النجاح */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          {t("Account created successfully")}
        </Alert>
      </Snackbar>

      {/* Snackbar الخطأ */}
      <Snackbar
        open={openError}
        autoHideDuration={4000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseError} severity="error" variant="filled" sx={{ width: '100%' }}>
          {t(errorMsg)}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Authentication;