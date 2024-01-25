// Icons
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PropTypes from 'prop-types';

/**
 *  Component that takes in a number from 0-10 and shows the rating as a 5-Star-Rating
 *
 * @return {*}
 */
const StarRating = ({ rating }) => {
    const calculateStars = () => {
        const stars = [];
        // Gets the first digit of the rating (no +1 because loop starts at 0)
        const splitRating = rating.toString().split('.');
        const splitStar = Number.parseInt(splitRating[0]);
        const splitRatio = Number.parseInt(splitRating[1]);

        for (var i = 0; i < 5; i++) {
            stars.push({
                color: '#9EE493',
                width:
                    i === splitStar && splitRatio
                        ? splitRatio * (60 / 10)
                        : i < splitStar
                        ? 80
                        : 0,
            });
        }

        console.log(stars);
        return stars;
    };

    const stars = calculateStars();
    return (
        <div
            style={{
                position: 'relative',
                width: 'fit-content',
                height: 'fit-content',
                padding: '0.5rem',
            }}
        >
            <div style={{ top: 0 }}>
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
                <StarRoundedIcon />
            </div>
            <div
                style={{
                    position: 'absolute',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    gap: 0,
                    top: '0.5rem',
                }}
            >
                {stars.map((star, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                width: `${20 + star.width}%`,
                            }}
                        >
                            <StarRoundedIcon sx={{ color: star.color }} />
                        </div>
                    );
                })}
            </div>
            <div style={{ position: 'absolute', top: '0.5rem' }}>
                <StarBorderRoundedIcon
                    sx={{ color: '#9EE493', transform: 'scale(1.2)' }}
                />
                <StarBorderRoundedIcon
                    sx={{ color: '#9EE493', transform: 'scale(1.2)' }}
                />
                <StarBorderRoundedIcon
                    sx={{ color: '#9EE493', transform: 'scale(1.2)' }}
                />
                <StarBorderRoundedIcon
                    sx={{ color: '#9EE493', transform: 'scale(1.2)' }}
                />
                <StarBorderRoundedIcon
                    sx={{ color: '#9EE493', transform: 'scale(1.2)' }}
                />
            </div>
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default StarRating;
