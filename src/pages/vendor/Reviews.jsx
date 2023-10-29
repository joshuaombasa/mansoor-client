import React from "react";
import { BsStarFill } from 'react-icons/bs';

export default function Reviews() {
    const reviews = [
        {
            rating: 4,
            name: "John Doe",
            date: "October 20, 2023",
            text: "The Loader was a game-changer for our construction project. It handled heavy materials effortlessly and significantly sped up our work. Highly satisfied with its performance.",
            id: "1",
        },
        {
            rating: 5,
            name: "Jane Smith",
            date: "October 15, 2023",
            text: "We relied on the Crane for our latest building construction, and it exceeded our expectations. The precision and power of the Crane made the task smooth and efficient. Would definitely use it again.",
            id: "2",
        },
        {
            rating: 3,
            name: "Michael Johnson",
            date: "October 12, 2023",
            text: "The Compactor did an adequate job, although we had hoped for a more seamless experience. It required some adjustments to achieve the desired results. Decent equipment overall.",
            id: "3",
        },
        {
            rating: 5,
            name: "Emily Williams",
            date: "October 10, 2023",
            text: "The Truck we rented was reliable and robust. It transported materials efficiently and proved to be a vital asset for our project. Very satisfied with its performance and durability.",
            id: "4",
        }
    ];

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