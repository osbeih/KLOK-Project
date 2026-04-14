import "./style.css";
import { useTranslation } from "react-i18next";

import Button from "@mui/material/Button";

export default function Panel({ isHaveAccount, setHaveAccount }) {
  const { t } = useTranslation();


  return (
    <div className="panel">

      <div className="panel-container">
        <div style={{}}>
          <img style={{ width: "500px" }} src="/office.png" alt="Office workspace" />
          <Button
            sx={{
              width: "350px",
              height: "40px",
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() => {
              setHaveAccount((a) => !a);
            }}
            variant="contained"
          >
            {isHaveAccount ? <>{t("Sign Up")}</> : <>{t("Login")}</>}
          </Button>
        </div>
        <h2>KLOK</h2>
      </div>
    </div>
  );
}
