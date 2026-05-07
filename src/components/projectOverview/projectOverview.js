import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { useTranslation } from 'react-i18next';
import './projectOverview.css';


export default function MultiActionAreaCard() {
    const { t } = useTranslation();

    return (
        <>
            <div className="project-overview-root">
                <Stack direction={"column"} justifyContent={"space-between"} spacing={2}>
                    <Typography variant='h6'>{t("projectOverview")}</Typography>
                    <LinearProgress className="border-linear-progress" variant="determinate" value={70} />
                </Stack>
            </div>
        </>
    );
}

