import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '../shared/button';
import { useTranslation } from "react-i18next";

import './welcomeMessage.css';
import '../../dashboard.css'


const Welcome = () => {
    const { t } = useTranslation();

    return (
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={4} className="welcome-root">
            <Stack className="welcome-info-stack" spacing={3}>
                <div>
                    <Typography className='dash-typography' variant='h6'>{t("hello")} KLOK Haleema,</Typography>
                    <Typography className='dash-typography' variant='subtitle1'>{t("scholarshipMessage")}</Typography>
                </div>
                <Button className="welcome-button" variant="contained">{t("viewResult")}</Button>
            </Stack>
            <img className="welcome-image" src='/office.png'></img>
        </Stack>
    )
}

export default Welcome;