import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option) => (
        <button
          type="button"
          key={option}
          className={s.OptionButton}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </ul>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
