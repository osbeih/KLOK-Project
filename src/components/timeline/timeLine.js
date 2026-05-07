import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { useTranslation } from 'react-i18next';
import './timeLine.css';

export default function LeftAlignedTimeline() {
    const { t } = useTranslation();
    return (
        <>
            <Typography variant="h6">{t("activityFeed")}</Typography>
            <Timeline className="timeline-root">
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        09:30 {t("AM")}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{t("timeline1")}</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        10:18 {t("AM")}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{t("timeline2")}</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        12:30 {t("PM")}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{t("timeline3")}</TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    );
}
