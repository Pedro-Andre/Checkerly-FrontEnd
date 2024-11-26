import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  type?: "submit" | "button";
  to?: string;
  className?: string;
}

const CtaButton: React.FC<ButtonProps> = ({
  text,
  type = "button",
  to,
  className = "body-btn",
}) => {
  if (to) {
    return (
      <Link to={to}>
        <button className={className} type="button">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <a>
      <button className={className} type={type}>
        {text}
      </button>
    </a>
  );
};

export default CtaButton;
