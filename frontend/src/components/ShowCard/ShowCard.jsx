// CSS
import './ShowCard.css';

// Types
import PropTypes from 'prop-types';

//Icons
import { PlayArrow } from '@mui/icons-material';

// Components
import Fab from '@mui/material/Fab';
import { useState } from 'react';

const ShowCard = ({ title, titleJP, description, coverImageURL }) => {

    const [hasProvider, setHasProvider] = useState(false)

    return (
        <div className='show-card'>
            <div className='show-img'>
                <img src={coverImageURL} draggable={false}></img>
                <div className='episode-indicator'>
                    <div>
                        <span className='current-ep'>1120</span> | 1012
                    </div>
                </div>
            </div>
            <div className='show-info'>
                <div className='play-btn d-flex justify-content-center align-items-center'>
                    <Fab
                        color='primary'
                        className='play'
                    >
                        <PlayArrow></PlayArrow>
                    </Fab>
                    {hasProvider && <img src='/assets/aniwatch_logo.png' alt="crunchroll logo" className='provider-logo'></img>}
                </div>
                <div className='show-title'>{title}</div>
                <div className='show-title-jp'>{titleJP}</div>
                <hr style={{ margin: '5px' }}></hr>
                <div className='show-desc'>{description}</div>
            </div>
        </div>
    );
};

ShowCard.propTypes = {
    title: PropTypes.string.isRequired,
    titleJP: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coverImageURL: PropTypes.string.isRequired,
};

export default ShowCard;
