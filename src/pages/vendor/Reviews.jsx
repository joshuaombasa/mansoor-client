import React, { useState } from "react";
import { BsStarFill } from 'react-icons/bs';
import { getVendorReviews } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import vendorReviewsAction from "../../redux/action-creators/vendorReviews";

export default function Reviews() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const reviews = useSelector(state => state.reviews)
    const dispatch = useDispatch()

    React.useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const data = await getVendorReviews()
                dispatch(vendorReviewsAction(data))
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getData()
    },[])

    if (loading) {
        return (
            <div className="equipment--page">
                <h1>Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <>
                <h1>Error: {error.message}</h1>
                <pre>{error.status} - {error.statusText}</pre>
            </>
        )
    }


    function starGenerator(rating) {
        const stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(<BsStarFill key={`a${i}`} style={{ color: "#FF8C38" }} />)
        }

        if (rating < 5) {
            const blankStars = 5 - rating
            for (let i = 0; i < blankStars; i++) {
                stars.push(<BsStarFill key={`b${i}`} style={{ color: "#8C8C8C" }} />)
            }
        }


        return stars
    }

    function getRatingCounts() {
        let fives = 0
        let fours = 0
        let threes = 0
        let twos = 0
        let ones = 0
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].rating === 5) {
                fives++
            } else if (reviews[i].rating === 4) {
                fours++
            } else if (reviews[i].rating === 3) {
                threes++
            } else if (reviews[i].rating === 2) {
                twos++
            } else if (reviews[i].rating === 1) {
                ones++
            }
        }

        function getPercentages(count) {
            return (count / reviews.length) * 100
        }

        return {
            fives: getPercentages(fives),
            fours: getPercentages(fours),
            threes: getPercentages(threes),
            twos: getPercentages(twos),
            ones: getPercentages(ones)
        }

    }

    const reviewElements = reviews.map(review => (
        <div  key={review.id} className="review--container">
            <>{starGenerator(review.rating)}</>
            <div className="ratings--meta">
                <span className="name">{review.name}</span>
                <span className="date">{review.date}</span>
            </div>
            <p>{review.text}</p>
        </div>
    ))

    function renderRatingBars() {
        const ratingCounts = getRatingCounts()
        return (
            <>
                <div className="rating--bar--container">
                    <h4>5 stars</h4>
                    <div className="rating-bar">
                        <span
                            className="gold--bar"
                            style={{ width: `${ratingCounts.fives}%` }}>
                        </span>
                    </div>
                    <h4>{`${ratingCounts.fives}%`}</h4>
                </div>
                <br />
                <div className="rating--bar--container">
                    <h4>4 stars</h4>
                    <div className="rating-bar">
                        <span
                            className="gold--bar"
                            style={{ width: `${ratingCounts.fours}%` }}>
                        </span>
                    </div>
                    <h4>{`${ratingCounts.fours}%`}</h4>
                </div>
                <br />
                <div className="rating--bar--container">
                    <h4>3 stars</h4>
                    <div className="rating-bar">
                        <span
                            className="gold--bar"
                            style={{ width: `${ratingCounts.threes}%` }}>
                        </span>
                    </div>
                    <h4>{`${ratingCounts.threes}%`}</h4>
                </div>
                <br />
                <div className="rating--bar--container">
                    <h4>2 stars</h4>
                    <div className="rating-bar">
                        <span
                            className="gold--bar"
                            style={{ width: `${ratingCounts.twos}%` }}>
                        </span>
                    </div>
                    <h4>{`${ratingCounts.twos}%`}</h4>
                </div>
                <br />
                <div className="rating--bar--container">
                    <h4>1 stars</h4>
                    <div className="rating-bar">
                        <span
                            className="gold--bar"
                            style={{ width: `${ratingCounts.ones}%` }}>
                        </span>
                    </div>
                    <h4>{`${ratingCounts.ones}%`}</h4>
                </div>
            </>
        )

    }

    return (
        <div className="vendor-page-width reviews--page">
            <h1>Your Reviews</h1>
            <div className="reviews--page--container">
                <div className="rating--section">
                    {renderRatingBars()}
                </div>
                <h3>Reviews({reviews.length})</h3>
                {reviewElements}
            </div>
        </div>
    )
}