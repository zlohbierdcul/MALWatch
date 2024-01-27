// React
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import { Tooltip } from '@mui/material';

// Utils
// None in the provided code

// Styling
import styles from './StarRating.module.css';

// Icons
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

// Other
// None in the provided code

/**
 *  Component that takes in a number from 0-10 and shows the rating as a 5-Star-Rating
 *
 * @return {*}
 */
const StarRating = ({ rating }) => {
    const [starRating, setStarRating] = useState(rating);
    var originalRating = rating;

    // Adding EventListener on render
    useEffect(() => {
        console.log('render');
        const stars = document.querySelector('.stars');
        stars.addEventListener('mousemove', starHoverListener);
        stars.addEventListener('mouseout', starLeaveListener);
        stars.addEventListener('click', starClickListener);
    }, []);

    // sets the displayed rating to the calculated hover rating
    const starHoverListener = (e) => {
        setStarRating(calculateRating(e));
    };

    // resets the rating when mouse leaves the stars
    const starLeaveListener = () => {
        setStarRating(originalRating);
    };

    const starClickListener = (e) => {
        const newRating = calculateRating(e);
        originalRating = newRating;
        setStarRating(newRating);
    };

    // calculates the distance from the mouse to the left side of the star container
    // and formats it into a 0-5 scale
    const calculateRating = (e) => {
        if (!Array.from(e.target.classList.values()).includes('stars')) return;
        var rect = e.target.getBoundingClientRect();
        const rectWidth = rect.width;
        var x = e.clientX - rect.left; //x position within the element.

        // 0f-1f -> 0.0-5.5
        return Math.round((x / rectWidth) * 50) / 10;
    };

    // Calculates the filling width each star needs to have
    const calculateStars = () => {
        const stars = [];
        const splitRating = starRating.toString().split('.');
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
        return stars;
    };

    const stars = calculateStars();
    return (
        <div className={styles.ratingContainer}>
            <div className={styles.starContainer}>
                <div className={styles.starBackgroundContainer}>
                    <StarRoundedIcon />
                    <StarRoundedIcon />
                    <StarRoundedIcon />
                    <StarRoundedIcon />
                    <StarRoundedIcon />
                </div>
                <div className={styles.starFillingContainer}>
                    {stars.map((star, index) => {
                        return (
                            <div
                                key={index}
                                className={styles.starFilling}
                                style={{ width: `${20 + star.width}%` }}
                            >
                                <StarRoundedIcon sx={{ color: star.color }} />
                            </div>
                        );
                    })}
                </div>
                <Tooltip
                    title='Set a rating'
                    placement='top'
                    leaveDelay={99999}
                    followCursor
                    className={styles.ratingTooltip}
                >
                    <div className={styles.starOutlineContainer + ' stars'}>
                        <StarBorderRoundedIcon className={styles.starOutline} />
                        <StarBorderRoundedIcon className={styles.starOutline} />
                        <StarBorderRoundedIcon className={styles.starOutline} />
                        <StarBorderRoundedIcon className={styles.starOutline} />
                        <StarBorderRoundedIcon className={styles.starOutline} />
                    </div>
                </Tooltip>
            </div>
            <div className={styles.ratingScore}>
                <span>{starRating}</span> / 5
            </div>
            <div className={styles.ratingLabel}>rating</div>
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default StarRating;
