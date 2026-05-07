import { BrowserRouter, useRoutes } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/auth";


import getRoutes from "./routes/routes";
import "./App.css";

// ✅ مكون منفصل للـ Routes لأن useAuth يحتاج يكون داخل AuthProvider
function AppRoutes() {
  const { login } = useAuth();
  return useRoutes(getRoutes(login));
}



// ✅ App الرئيسي
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;