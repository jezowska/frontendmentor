import Card from "./Card";
import thankYouImg from "../images/illustration-thank-you.svg"
import "./ThankYouCard.css"

const ThankYouCard = ({ rating }) => {
    return (
        <Card>
            <div className="thank-you-container">
                <img src={thankYouImg} alt="" />
            </div>

            <div className="selected">
                <p>You selected {rating} out of 5</p>
            </div>

            <h2 className="title">Thank you!</h2>
            <p className="text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </Card>
    );
}

export default ThankYouCard;