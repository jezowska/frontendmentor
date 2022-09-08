import { useState } from 'react';
import './App.css';
import Rating from "./components/Rating"
import ThankYouCard from "./components/ThankYouCard"

function App() {
  const [showThankYouCard, setShowThankYouCard] = useState(false)
  const [rating, setRating] = useState(null)

  return (
    <div className="App">
      {showThankYouCard ? (
        <ThankYouCard rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setShowThankYouCard={setShowThankYouCard}
        />
      )}
    </div>
  );
}

export default App;
