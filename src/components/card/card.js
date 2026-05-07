
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '../shared/button';
import './card.css';


export default function Cards({ icon, title, para }) {
    return (
        <Card className="card-root">
            <Stack direction={"row"} alignItems={"flex-end"} justifyContent={"space-between"} spacing={2} className="card-stack">
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <div className="card-icon-wrapper">
                        {icon}
                    </div>
                    <Stack direction={"column"}>
                        <Typography variant={'subtitle1'} className="card-title">{title}</Typography>
                        <Typography variant={'subtitle2'}>{para}</Typography>
                    </Stack>
                </Stack>
                <Button><ArrowRightAltIcon /></Button>
            </Stack>

        </Card>
    );
}
