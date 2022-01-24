import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.List}>
      <li className={s.ListItem}>
        <span>Good: </span>
        <span className={s.Value}>{good}</span>
      </li>
      <li className={s.ListItem}>
        <span>Neutral: </span>
        <span className={s.Value}>{neutral}</span>
      </li>
      <li className={s.ListItem}>
        <span>Bad: </span>
        <span className={s.Value}>{bad}</span>
      </li>
      <li className={s.ListItem}>
        <span>Total: </span>
        <span className={s.Value}>{total}</span>
      </li>
      <li className={s.ListItem}>
        <span>Positive feedbacks: </span>
        <span className={s.Value}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
