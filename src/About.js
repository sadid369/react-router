import React from "react";

import Header from "./Header";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div>
      <section>
        <h1>About Page</h1>
        <button onClick={handleClick}>go to contact page</button>
      </section>
    </div>
  );
};

export default About;
