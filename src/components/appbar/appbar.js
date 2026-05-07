import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SettingsIcon from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../shared/button';
import Stack from '@mui/material/Stack';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { logoutUser } from '../../mockAuth';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LocaleContext } from '../../contexts/locale';
import { useTranslation } from 'react-i18next';
import './appbar.css';


export default function SearchAppBar() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    const handleLogOut = () => {
        logoutUser();
        navigate("/");
    }

    function LanguageSwitcher() {
        const { locale, changeLanguage } = useContext(LocaleContext);
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);

        const handleClick = (event) => setAnchorEl(event.currentTarget);
        const handleClose = () => setAnchorEl(null);
        const handleLanguage = () => { changeLanguage(); handleClose(); };

        return (
            <div >
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
                    slotProps={{ list: { 'aria-labelledby': 'basic-button' } }}
                >
                    <MenuItem onClick={handleLanguage}>
                        {locale === "ar" ? t("english") : t("arabic")}
                    </MenuItem>
                </Menu>
            </div>
        );
    }
    return (
        <Box className="appbar-box">
            <AppBar position="static" className="appbar-root">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        className="appbar-title"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        {t("dashboard")}
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent={"center"} alignItems={"center"}>
                        <div className="search-container">
                            <div className="search-icon-wrapper">
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder={t("search") + "…"}
                                inputProps={{ 'aria-label': 'search', className: "search-input-inner" }}
                                className="search-input-root"
                            />
                        </div>

                        <Stack direction={"row"} alignItems={"center"} spacing={1}>
                            <AccessTimeRoundedIcon />
                            <Typography className="remaining-time-text">{t("remainingTime")}</Typography>
                        </Stack>
                        <Button variant="contained" onClick={handleClickOpen} >{t("logout")}</Button>
                        <SettingsIcon />
                        <LanguageSwitcher />
                    </Stack>
                </Toolbar>
            </AppBar>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                role="alertdialog"
            >
                <DialogTitle id="alert-dialog-title">
                    {t("logout")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {t("areYouSureLogout")}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        {t("no")}
                    </Button>
                    <Button onClick={handleLogOut}>{t("yes")}</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
