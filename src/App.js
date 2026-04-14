import Dashboard from "./dashboard";
import "./App.css";

import Register from "./components/register";
import ProtectedRoute from "./ProtectedRoute";

import LanguageIcon from '@mui/icons-material/Language';
import Button from "./components/button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import { useContext } from "react";
import { LocaleContext } from "./contexts/locale";



import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [login, setLogin] = useState(false);

  const { locale, changeLanguage } = useContext(LocaleContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const routes = [
    {
      path: "/",
      element: <Register setLogin={setLogin} />,
    },
  ];


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLanguage = () => {
    changeLanguage();
    handleClose();
  }

  return (
    <>
      <div style={{ position: "absolute", top: "10px", right: "0", zIndex: "1" }}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <LanguageIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              'aria-labelledby': 'basic-button',
            },
          }}
        >
          <MenuItem onClick={handleLanguage}>{locale == "ar" ? "English" : "Arabic"}</MenuItem>
        </Menu>
      </div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute login={login}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
