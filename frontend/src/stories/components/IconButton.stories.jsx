import { ArrowForward } from '@mui/icons-material';
import IconButton from '../../components/IconButton/IconButton.jsx';

export default {
    component: IconButton,
    tags: ['autodocs'],
    title: 'components/IconButton',
};

export const Default = {
    args: {
        children: 'Hello',
        type: 'primary',
    },
};

export const IconLeft = {
    args: {
        ...Default.args,
        icon: <ArrowForward />,
        iconPosition: 'left',
    },
};

export const IconRight = {
    args: {
        ...IconLeft.args,
        iconPosition: 'right',
    },
};
