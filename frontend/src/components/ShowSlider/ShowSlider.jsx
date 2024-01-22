import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ShowCard from '../ShowCard/ShowCard.jsx';
import IconButton from '@mui/material/IconButton';
import {
    ArrowBackIosNewOutlined,
    ArrowForwardIosOutlined,
} from '@mui/icons-material';
import { useState } from 'react';

import './ShowSlider.css';

const ShowSlider = ({ shows }) => {
    const [slider, setSlider] = useState(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={{position: "relative"}}>
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
                        className='p-5'
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
