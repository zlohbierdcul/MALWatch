// React
import { useState } from 'react';

// Util
import PropTypes from 'prop-types';

// Components
import Slider from 'react-slick';
import ShowCard from '../ShowCard/ShowCard.jsx';

// Icons
import IconButton from '@mui/material/IconButton';
import {
    ArrowBackIosNewOutlined,
    ArrowForwardIosOutlined,
} from '@mui/icons-material';

// Styling
import './ShowSlider.css';

const ShowSlider = ({ shows }) => {
    const [slider, setSlider] = useState(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={{ position: 'relative' }}>
            <div className='slider-arrow'>
                <IconButton
                    onClick={() => slider.slickPrev()}
                    className='arrow-btn'
                >
                    <ArrowBackIosNewOutlined></ArrowBackIosNewOutlined>
                </IconButton>
                <IconButton
                    onClick={() => slider.slickNext()}
                    className='arrow-btn next'
                >
                    <ArrowForwardIosOutlined></ArrowForwardIosOutlined>
                </IconButton>
            </div>
            <Slider
                ref={(c) => setSlider(c)}
                {...settings}
                className='w-100'
            >
                {shows.map((show, index) => (
                    <div
                        key={index}
                        className='p-3'
                    >
                        <ShowCard
                            key={index}
                            title={show.title}
                            titleJP={show.titleJP}
                            description={show.description}
                            coverImageURL={show.url}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

ShowSlider.propTypes = {
    shows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShowSlider;
