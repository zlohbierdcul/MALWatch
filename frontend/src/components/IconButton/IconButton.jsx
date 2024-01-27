import Button from '@mui/material/Button';

import PropTypes from 'prop-types';

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

IconButton.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary']),
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    style: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default IconButton;
