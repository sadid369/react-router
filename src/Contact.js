import React from "react";

import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <section>
        <h1>Contact Page</h1>
        <button onClick={handleClick}>go to home page</button>
      </section>
    </div>
  );
};

export default Contact;
