import React from "react";

const Total = ({ course }) => {
  return (
    <p>
      <b>
        Total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
        exercises
      </b>
    </p>
  );
};

export default Total;
