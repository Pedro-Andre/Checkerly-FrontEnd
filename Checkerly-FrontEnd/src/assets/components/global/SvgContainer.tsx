import React from "react";

interface SvgContainerProps {
  width?: string;
  height?: string;
  className?: string;
}

const SvgContainer: React.FC<SvgContainerProps> = ({
  // Tamanho padrão
  width = "1299",
  height = "418",
  className = "svg-container",
}) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        rx="20"
        width="100%"
        height="100%"
        x="0"
        y="0"
        stroke="url(#paint0_linear_227_259)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_227_259"
          x1="1.61353"
          y1="1.00342"
          x2="1297.61"
          y2="416.915"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#009D53" />
          <stop offset="1" stopColor="#F07F3D" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SvgContainer;
