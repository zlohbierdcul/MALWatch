// Icons
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './StarRating.module.css';

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

/**
 *  Component that takes in a number from 0-10 and shows the rating as a 5-Star-Rating
 *
 * @return {*}
 */
const StarRating = ({ rating }) => {
    var originalRating = rating
    const [starRating, setStarRating] = useState(rating);

    // sets the displayed rating to the calculated hover rating
    const starHoverListener = (e) => {
        setStarRating(calculateRating(e));
    };

    // resets the rating when mouse leaves the stars
    const starLeaveListener = () => {
        console.log(originalRating)
        setStarRating(originalRating);
    };

    const starClickListener = (e) => {
        const newRating = calculateRating(e)
        originalRating = newRating
        setStarRating(newRating)
    }

    // Adding EventListener on render
    useEffect(() => {
        console.log("render")
        const stars = document.querySelector('.stars');
        stars.addEventListener('mousemove', starHoverListener);
        stars.addEventListener('mouseout', starLeaveListener);
        stars.addEventListener('click', starClickListener);
    }, []);

    const calculateStars = () => {
        const stars = [];
        // Gets the first digit of the rating (no +1 because loop starts at 0)
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
                <div className={styles.starOutlineContainer + ' stars'}>
                    <StarBorderRoundedIcon className={styles.starOutline} />
                    <StarBorderRoundedIcon className={styles.starOutline} />
                    <StarBorderRoundedIcon className={styles.starOutline} />
                    <StarBorderRoundedIcon className={styles.starOutline} />
                    <StarBorderRoundedIcon className={styles.starOutline} />
                </div>
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
