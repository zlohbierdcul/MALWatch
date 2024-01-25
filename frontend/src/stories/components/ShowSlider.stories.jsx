import ShowSlider from '../../components/ShowSlider/ShowSlider';
import { mockShows } from '../../mockdata/mockShows';

export default {
    component: ShowSlider,
    tags: ['autodocs'],
    title: 'Components/ShowSlider',
};

export const Default = {
    args: {
        shows: mockShows,
    },
};
