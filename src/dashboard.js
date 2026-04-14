import Typography from '@mui/material/Typography';
import './dashboard.css'


import Stack from '@mui/material/Stack';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import Button from './components/button';
import Avatar from '@mui/material/Avatar';
import { Container, flex, Grid } from '@mui/system';
import AppBar from './components/appbar';

const Dashboard = () => {
  return (
    <>
      <div className='dashboard-container'>
        <Stack className='sidebar'>
          <Stack className='logo-container' justifyContent={"center"} height={150}>
            <Stack spacing={3} direction="column">
              <Stack direction="row" justifyContent={"center"} alignItems={"center"}>
                <DashboardRoundedIcon />
                <Typography className='Klok-brand' variant='h5'> KLOK</Typography>
              </Stack>
              <Stack style={{ borderTop: "1px solid silver", padding: "10px" }} direction="row" alignItems="center" spacing={1}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Stack className='user-information' direction="column">
                  <Typography variant='subtitle1'>Jhon</Typography>
                  <Typography variant='subtitle2'>learning</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={1} style={{ padding: "10px" }}>
            <Typography variant='subtitle2'>learning</Typography>
            <Button className="dash-btn" variant="contained" startIcon={<DashboardRoundedIcon />}>Dashboard</Button>
            <Button className="dash-btn" variant="contained" startIcon={<CalendarTodayRoundedIcon />}>Time Schedule</Button>
            <Button className="dash-btn" variant="contained" startIcon={<NotificationsRoundedIcon />}>Notifications</Button>
            <Button className="dash-btn" variant="contained" startIcon={<MessageRoundedIcon />}>Messages</Button>
            <Button className="dash-btn" variant="contained" startIcon={<InsertDriveFileIcon />}>learning Plan</Button>
            <Button className="dash-btn" variant="contained" startIcon={<SettingsIcon />}>Time Table</Button>
          </Stack>
          <Stack style={{ padding: "10px" }} spacing={1}>
            <Typography variant='subtitle2'>learning & Support</Typography>
            <Button className="dash-btn" variant="contained" startIcon={<QuestionMarkIcon />}>Help/report</Button>
            <Button className="dash-btn" variant="contained" startIcon={<PermContactCalendarRoundedIcon />}>Contact Us</Button>
          </Stack>
          <br></br>
          <Stack style={{ padding: "10px" }}>
            <Button style={{ backgroundColor: "white", color: "black", justifyContent: "center" }} variant="contained" startIcon={<DashboardRoundedIcon />}>Dashboard</Button>
          </Stack>
        </Stack >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%", gap: "3rem" }}>
          <AppBar />
          <Grid className='grid-container' container sx={{}} spacing={2}>
            <Grid size={12} sx={{ border: "1px solid" }} >
              <p>size=8</p>
            </Grid>
            <Grid size={7} sx={{ border: "1px solid" }}>
              <p>size=4</p>
            </Grid>
            <Grid size={5} sx={{ border: "1px solid" }}>
              <p>size=4</p>
            </Grid>
            <Grid size={7} sx={{ border: "1px solid" }}>
              <p>size=4</p>
            </Grid>
            <Grid size={5} sx={{ border: "1px solid" }}>
              <p>size=8</p>
            </Grid>
          </Grid>
        </div>


      </div>
    </>
  );
};

export default Dashboard;