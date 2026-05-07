import Panel from "../panel/panel";
import Authentication from "../auth/authentication";

import { useState } from "react";

export default function Register({ setLogin, }) {
  const [isHaveAccount, setHaveAccount] = useState(true);



  return (
    <main>

      <div className="container">
        <Authentication
          isHaveAccount={isHaveAccount}
          setHaveAccount={setHaveAccount}
          setLogin={setLogin}
        />
        <Panel isHaveAccount={isHaveAccount} setHaveAccount={setHaveAccount} />
      </div>
    </main>
  );
}
