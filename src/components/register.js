import Panel from "./panel";
import Authentication from "./authentication";

import { useState } from "react";

export default function Register({ setLogin }) {
  const [isHaveAcouunt, setHaveAccount] = useState(true);

  return (
    <main>
      <div className="container">
        <Authentication
          isHaveAcouunt={isHaveAcouunt}
          setHaveAccount={setHaveAccount}
          setLogin={setLogin}
        />
        <Panel isHaveAcouunt={isHaveAcouunt} setHaveAccount={setHaveAccount} />
      </div>
    </main>
  );
}
