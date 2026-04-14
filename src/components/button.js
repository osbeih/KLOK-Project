import Button from '@mui/material/Button';

export default function BasicButtons({ children, variant, color, size, onClick, disabled, type, startIcon, endIcon, fullWidth, sx, className, ...props }) {
    return (
        <>
            <Button variant={variant} color={color} size={size} onClick={onClick} disabled={disabled} type={type} startIcon={startIcon} endIcon={endIcon} fullWidth={fullWidth} sx={sx} className={className} {...props}>{children}</Button>
        </>
    );
}
