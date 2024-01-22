// CSS
import { PlayArrow } from '@mui/icons-material';
import './ShowCard.css';

// Types
import PropTypes from 'prop-types';

const ShowCard = ({ title, titleJP, description, coverImageURL }) => {
    return (
            <div className='show-card'>
                <div className='show-img'>
                    <img src={coverImageURL}></img>
                </div>
                <div className='show-info'>
                    <div className='play-btn d-flex justify-content-center align-items-center'>
                        <PlayArrow style={{fontSize: "40px"}}></PlayArrow>
                    </div>
                    <div className='show-title'>{title}</div>
                    <div className='show-title-jp'>{titleJP}</div>
                    <hr style={{margin: "5px"}}></hr>
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
