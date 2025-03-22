"use client";
import { Star } from "lucide-react";
import { useState } from "react";

interface RatingProps {
  initialRating?: number;
  total?: number;
  size?: number;
  fillColor?: string; // New prop for custom fill color
  onChange?: (rating: number) => void;
}

const Rating = ({
  initialRating = 0,
  total = 5,
  size = 20,
  fillColor = "fill-warning stroke-warning", // Default color class
  onChange,
}: RatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onChange?.(value);
  };

  return (
    <div className="rating flex justify-center">
      {[...Array(total)].map((_, index) => {
        const value = index + 1;
        return (
          <button
            key={index}
            className="transition-all duration-100"
            onMouseEnter={() => setHoverRating(value)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleClick(value)}
          >
            <Star
              size={size}
              className={`${
                (hoverRating ? hoverRating >= value : rating >= value)
                  ? fillColor
                  : "stroke-base-content/20"
              } transition-colors duration-150`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
