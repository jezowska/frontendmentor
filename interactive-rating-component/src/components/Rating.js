import { useState } from "react"
import Card from "./Card"
import "./Rating.css"
import starIcon from "../images/icon-star.svg"

const Rating = ({ rating, setRating, setShowThankYouCard }) => {
    const [activeRatings, setActiveRatings] = useState({
        oneStar: false,
        twoStars: false,
        threeStars: false,
        fourStars: false,
        fiveStars: false,
    })

    const handleSubmit = () => {
        console.log(rating)
        if (!rating) return;

        setShowThankYouCard(true)
    }

    return (
        <Card>
            <div className="star-container">
                <img src={starIcon} alt="star" />
            </div>
            <h2 className="title">How did we do?</h2>
            <p className="text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="rating">
                <div
                    className={activeRatings.oneStar ? "rating-container active" : "rating-container"}
                    onClick={() => {
                        setActiveRatings({ oneStar: !activeRatings.oneStar })
                        setRating(1)
                    }}

                >1</div>
                <div
                    className={activeRatings.twoStars ? "rating-container active" : "rating-container"}
                    onClick={() => {
                        setActiveRatings({ twoStars: !activeRatings.twoStars })
                        setRating(2)
                    }}
                >2</div>
                <div
                    className={activeRatings.threeStars ? "rating-container active" : "rating-container"}
                    onClick={() => {
                        setActiveRatings({ threeStars: !activeRatings.threeStars })
                        setRating(3)
                    }}
                >3</div>
                <div
                    className={activeRatings.fourStars ? "rating-container active" : "rating-container"}
                    onClick={() => {
                        setActiveRatings({ fourStars: !activeRatings.fourStars })
                        setRating(4)
                    }}
                >4</div>
                <div
                    className={activeRatings.fiveStars ? "rating-container active" : "rating-container"}
                    onClick={() => {
                        setActiveRatings({ fiveStars: !activeRatings.fiveStars })
                        setRating(5)
                    }}
                >5</div>
            </div>
            <button className="submit_btn" onClick={handleSubmit}>Submit</button>
        </Card >
    )
}

export default Rating;