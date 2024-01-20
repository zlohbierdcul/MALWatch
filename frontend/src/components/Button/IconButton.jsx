import Button from '@mui/material/Button';

const IconButton = ({ type, icon, iconPosition, style, onClick, children }) => {
    const buttonColor = type === 'primary' ? 'primary' : 'secondary';

    return (
        <Button
            variant='contained'
            color={buttonColor}
            startIcon={iconPosition === 'left' && icon ? icon : null}
            endIcon={iconPosition === 'right' && icon ? icon : null}
            style={style ? style : null}
            onClick={onClick ? onClick : null}
        >
            {children}
        </Button>
    );
};

export default IconButton;
