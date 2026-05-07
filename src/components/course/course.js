import Button from "../shared/button";
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LinearProgress from "@mui/material/LinearProgress";
import "./course.css";
import { useTranslation } from "react-i18next";




const Course = (props) => {
    const { t } = useTranslation();
    const progressColor = props.progrssValue < 40 ? "red" : props.progrssValue < 70 ? "orange" : "green";

    return (
        <>
            <div className="course-root">
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Typography className="course-character" variant="subtitle1">{props.courseCharacter}</Typography>
                        <Typography className="course-name" variant="subtitle1">{props.courseName}</Typography>
                    </Stack>

                    <Typography variant="subtitle1">{props.courseInfo}</Typography>

                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Typography variant="subtitle1">{props.courseStatus}{props.progrssValue}%</Typography>
                        <LinearProgress
                            variant="determinate"
                            value={props.progrssValue}
                            className="course-progress"
                            sx={{ "--progress-color": progressColor }}
                        />
                        <Button variant="contained">
                            {t("View")}<ArrowForwardIosIcon className="course-view-icon" />
                        </Button>
                    </Stack>

                </Stack>
            </div>
        </>
    )
}

export default Course;
