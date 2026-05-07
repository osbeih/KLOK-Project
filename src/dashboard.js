import Typography from '@mui/material/Typography';


import Stack from '@mui/material/Stack';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import Button from './components/shared/button';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/system';
import AppBar from './components/appbar/appbar';
import Welcome from './components/welcomeMessage/welcomeMessage';
import ProjectOverview from './components/projectOverview/projectOverview';
import Courses from './components/courses/courses';
import ActivityFeed from './components/activityFeed/activityFeed';
import Card from './components/card/card';
import EditNoteIcon from '@mui/icons-material/EditNote';

import { useTranslation } from "react-i18next";


const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <>
      <Stack className='dashboard-container' direction="row">
        <Stack className='sidebar' >
          <Stack className='logo-container' justifyContent={"center"} height={150}>
            <Stack spacing={3} direction="column">
              <Stack direction="row" justifyContent={"center"} alignItems={"center"}>
                <DashboardRoundedIcon />
                <Typography className='Klok-brand' variant='h5'> KLOK</Typography>
              </Stack>
              <Stack sx={{ borderTop: "1px solid silver", padding: "10px" }} direction="row" alignItems="center" spacing={1}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Stack className='user-information' direction="column">
                  <Typography className='dash-typography' variant='subtitle1'>{t("KLOK Haleema")}</Typography>
                  <Typography className='dash-typography' variant='subtitle4'>{t("student")}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={1} padding={1}>
            <Typography variant='subtitle2'>{t("learning")}</Typography>
            <Button className="dash-btn" variant="contained" startIcon={<DashboardRoundedIcon />}>{t("dashboard")}</Button>
            <Button className="dash-btn" variant="contained" startIcon={<CalendarTodayRoundedIcon />}>{t("timeSchedule")}</Button>
            <Button className="dash-btn" variant="contained" startIcon={<NotificationsRoundedIcon />}>{t("notifications")}</Button>
            <Button className="dash-btn" variant="contained" startIcon={<MessageRoundedIcon />}>{t("messages")}</Button>
            <Button className="dash-btn" variant="contained" startIcon={<InsertDriveFileIcon />}>{t("learningPlan")}</Button>
            <Button className="dash-btn" variant="contained" startIcon={<SettingsIcon />}>{t("timeTable")}</Button>
          </Stack>
          <Stack padding={1} spacing={1}>
            <Typography variant='subtitle2'>{t("learningAndSupport")}</Typography>
            <Button className="dash-btn" variant="contained" startIcon={<QuestionMarkIcon />}>{t("helpReport")}</Button>
            <Button className="dash-btn" variant="contained" startIcon={<PermContactCalendarRoundedIcon />}>{t("contactUs")}</Button>
          </Stack>
          <br></br>
          <Stack sx={{ padding: "10px" }}>
            <Button sx={{ backgroundColor: "white", color: "black", justifyContent: "center" }} variant="contained" startIcon={<DashboardRoundedIcon />}>{t("dashboard")}</Button>
          </Stack>
        </Stack >
        <Stack flex={1} display={"flex"} flexDirection={"column"} height={"100%"} gap={"4rem"}>
          <AppBar />
          <Grid className='grid-container' container spacing={2}>
            <Grid size={12} >
              <Welcome />
            </Grid>
            <Grid size={7}>
              <Stack spacing={2}>
                <ProjectOverview />
                <Courses />
              </Stack>

            </Grid>
            <Grid size={5} sx={{}}>
              <Stack spacing={2}>
                <ActivityFeed />
                <Stack spacing={1}>
                  <Card icon={<EditNoteIcon />} title={t("leave")} para={t("leaveQuestion")} />
                  <Card icon={<EditNoteIcon />} title={t("complaint")} para={t("complaintQuestion")} />
                </Stack>

              </Stack>

            </Grid>

          </Grid>
        </Stack >


      </Stack>
    </>
  );
};

export default Dashboard;