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
import Stack from "@mui/material/Stack";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

import { registerUser, loginUser } from "../../mockAuth";
import { useAuth } from "../../contexts/auth";
import "./authentication.css";
import "../style.css"



const signupSchema = yup.object({
  fullName: yup.string().required(i18n.t("nameRequired")),
  email: yup.string().email(i18n.t("invalidEmail")).required(i18n.t("emailRequired")),
  password: yup.string().min(6, i18n.t("min6")).required(i18n.t("required")),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], i18n.t("passwordsMustMatch"))
    .required(i18n.t("required")),
  terms: yup.boolean().oneOf([true], i18n.t("agreeTerms")).required(i18n.t("agreeTerms")),
});

const loginSchema = yup.object({
  email: yup.string().email(i18n.t("invalidEmail")).required(i18n.t("emailRequired")),
  password: yup.string().required(i18n.t("passwordRequired")),
});

const Authentication = ({ isHaveAccount, setHaveAccount }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { setLogin } = useAuth();


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
        className="auth-logo"
        src="/Klok-Brand-Logo.png"
        alt="logo"
      />

      <Stack>
        {isHaveAccount ? (
          <>
            <Stack className="auth-form-wrapper">
              <Stack>
                <Typography className="title" variant="h4">
                  {t("welcome")}
                </Typography>
                <Typography className="title-para" variant="subtitle2">
                  {t("loginMessage")}
                </Typography>
              </Stack>
              <form className="form-container" onSubmit={handleLoginSubmit(onLogin)}>
                <Stack className="inputs-container" >
                  <Stack direction="column" spacing={1.4}>
                    <Stack direction="row">
                      <EmailOutlinedIcon className="input-icon" />
                      <TextField
                        label={t("email")}
                        type="email"
                        fullWidth
                        {...loginRegister("email")}
                        error={!!loginErrors.email}
                        helperText={loginErrors.email?.message}
                      />
                    </Stack>

                    <Stack direction="row">
                      <HttpsOutlinedIcon className="input-icon" />
                      <TextField
                        type="password"
                        label={t("password")}
                        fullWidth
                        {...loginRegister("password")}
                        error={!!loginErrors.password}
                        helperText={loginErrors.password?.message}
                      />
                    </Stack>

                    <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} >
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("rememberMe")}
                      />
                      <Link href="#">{t("forgotPassword")}</Link>
                    </Stack>
                  </Stack>
                </Stack>

                <Button type="submit" variant="contained" fullWidth>
                  {t("login")}
                </Button>
              </form>
            </Stack>
          </>
        ) : (
          <>
            <Stack>
              <Stack>
                <Typography className="title" variant="h4">
                  {t("createAccountMessage")}
                </Typography>
                <Typography className="title-para" variant="subtitle2">
                  {t("joinTheTimekeepingRevolution")}
                </Typography>
              </Stack>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="column">
                  <Stack className="inputs-container">
                    <Stack direction="row">
                      <PermIdentityOutlinedIcon className="input-icon" />
                      <TextField
                        label={t("fullName")}
                        fullWidth
                        {...register("fullName")}
                        error={!!errors.fullName}
                        helperText={errors.fullName?.message}
                      />
                    </Stack>

                    <Stack direction="row">
                      <EmailOutlinedIcon className="input-icon" />
                      <TextField
                        label={t("email")}
                        fullWidth
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    </Stack>

                    <Stack direction="row">
                      <HttpsOutlinedIcon className="input-icon" />
                      <TextField
                        type="password"
                        label={t("password")}
                        fullWidth
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                      />
                    </Stack>

                    <Stack direction="row">
                      <HttpsOutlinedIcon className="input-icon" />
                      <TextField
                        type="password"
                        label={t("confirmPassword")}
                        fullWidth
                        {...register("confirmPassword")}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                      />
                    </Stack>

                    <FormControlLabel
                      control={<Checkbox {...register("terms")} error={!!errors.terms} helperText />}
                      label={t("agreeTerms")}
                      required
                    />
                  </Stack>

                  <Button type="submit" variant="contained" fullWidth>
                    {t("signUp")}
                  </Button>
                </Stack>
              </form>
            </Stack>
          </>
        )}
      </Stack>

      <Typography className="auth-bottom-text">
        {isHaveAccount ? t("dontHaveAccount") : t("alreadyHaveAccount")}
        <Link component="button" onClick={() => setHaveAccount(!isHaveAccount)}>
          {isHaveAccount ? t("createAccount") : t("signIn")}
        </Link>
      </Typography>

      {/* Snackbar النجاح */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          {t("accountCreated")}
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