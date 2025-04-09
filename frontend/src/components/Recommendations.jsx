import React, { useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import "../styles/Recommendation.css";

const Recommendations = ({ type, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const cardRefs = useRef([]);

  const onSwipe = (direction) => {
    if (direction === "right") {
      setFeedback("✅ Match saved!");
    } else if (direction === "left") {
      setFeedback("❌ Skipped.");
    }

    setTimeout(() => {
      setFeedback("");
      setCurrentIndex((prev) => prev + 1);
    }, 800); // Delay before moving to next card
  };

  const manualSwipe = (direction) => {
    if (cardRefs.current[currentIndex]) {
      cardRefs.current[currentIndex].swipe(direction);
    }
  };

  const item = data?.[currentIndex];

  return (
    <div className="recommendations-container">
      <h3>Recommended {type === "student" ? "Internships" : "Candidates"}</h3>

      {item ? (
        <>
          <div className="recommendation-swipe-container">
            <TinderCard
              key={item._id || currentIndex}
              preventSwipe={["up", "down"]}
              onSwipe={onSwipe}
              ref={(el) => (cardRefs.current[currentIndex] = el)}
            >
              <div className="recommendation-card swipe-card large-card">
                {type === "student" ? (
                  <>
                    <h2>{item.title}</h2>
                    <p><strong>Company:</strong> {item.company}</p>
                    <p><strong>Skills:</strong> {item.skills.join(", ")}</p>
                    <p><strong>Location:</strong> {item.location}</p>
                  </>
                ) : (
                  <>
                    <h2>{item.name}</h2>
                    <p><strong>Skills:</strong> {item.skills.join(", ")}</p>
                    <p><strong>Experience:</strong> {item.experience} years</p>
                  </>
                )}
              </div>
            </TinderCard>
          </div>

          <div className="swipe-buttons">
            <button onClick={() => manualSwipe("left")} className="swipe-left">👎 Pass</button>
            <button onClick={() => manualSwipe("right")} className="swipe-right">👍 Interested</button>
          </div>

          {feedback && <div className="swipe-feedback">{feedback}</div>}
        </>
      ) : (
        <div className="no-more-cards">No more recommendations 👋</div>
      )}
    </div>
  );
};

export default Recommendations;
