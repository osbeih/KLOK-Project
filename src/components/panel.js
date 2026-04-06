import { Flag } from "@mui/icons-material";
import "./style.css";

import Button from "@mui/material/Button";

export default function Panel({ isHaveAcouunt, setHaveAccount }) {
  return (
    <div className="panel">
      <div className="panel-container">
        <div style={{}}>
          <img style={{ width: "500px" }} src="/office.png"></img>
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
            {isHaveAcouunt ? <>Sign Up</> : <>Login</>}
          </Button>
        </div>
        <h2>KLOK</h2>
      </div>
    </div>
  );
}
