import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useTranslation } from "react-i18next"

import Course from "../course/course"
import './courses.css'


const Courses = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="courses-container">
                <Typography variant="h6">{t("courses")}</Typography>
                <Stack  direction={"column"} spacing={1} >
                    <Course courseCharacter="E" courseName={t("english")} courseInfo="BCS-4A" progrssValue={70} />
                    <Course courseCharacter="S" courseName={t("science")} courseInfo="BCS-4A" progrssValue={30} />
                    <Course courseCharacter="P" courseName={t("projects")} courseInfo="BCS-4A" progrssValue={40} />
                    <Course courseCharacter="A" courseName={t("arts")} courseInfo="BCS-4A" progrssValue={100} />
                </Stack>
            </div>
        </>
    )
}

export default Courses;