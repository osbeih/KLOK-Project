
import "../style.css";
import "./panel.css";
import { useTranslation } from "react-i18next";

import Button from "@mui/material/Button";

export default function Panel({ isHaveAccount, setHaveAccount }) {
  const { t } = useTranslation();


  return (
    <div className="panel">

      <div className="panel-container">
        <div>
          <img className="panel-image" src="/office.png" alt="Office workspace" />
          <Button
            className="panel-button"
            onClick={() => {
              setHaveAccount((a) => !a);
            }}
            variant="contained"
          >
            {isHaveAccount ? <>{t("signUp")}</> : <>{t("login")}</>}
          </Button>
        </div>
        <h2>KLOK</h2>
      </div>
    </div>
  );
}
