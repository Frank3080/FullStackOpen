import React from "react";

const CustomNotification = ({ successMessage, errorMessage }) => {
  if (!successMessage && !errorMessage) {
    return null;
  }

  return (
    <div className={`notification ${successMessage ? "success" : "error"}`}>
      {successMessage ? successMessage : errorMessage}
    </div>
  );
};

export default CustomNotification;
