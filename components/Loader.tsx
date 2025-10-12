interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

function Loader({ size = "md", className = "" }: LoaderProps) {
  const sizeMap = {
    sm: 30,
    md: 40,
    lg: 60,
    xl: 100,
  };

  const svgSize = sizeMap[size];

  // Determine container classes based on size
  const containerClasses =
    size === "xl"
      ? "flex justify-center items-center h-screen"
      : "flex justify-center items-center";

  return (
    <div className={`${containerClasses} ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width={svgSize}
        height={svgSize}
        display="block"
      >
        <g transform="translate(82 50)">
          <circle fill="#8b5cf6" r={6 * (svgSize / 100)}>
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.48 1.48;1 1"
              begin="-0.9s"
              type="scale"
              attributeName="transform"
            />
            <animate
              begin="-0.9s"
              values="1;0"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              attributeName="fill-opacity"
            />
          </circle>
        </g>
        <g transform="translate(75.889 68.81) rotate(36)">
          <circle fillOpacity={0.9} fill="#8b5cf6" r={6 * (svgSize / 100)}>
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.48 1.48;1 1"
              begin="-0.8s"
              type="scale"
              attributeName="transform"
            />
            <animate
              begin="-0.8s"
              values="1;0"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              attributeName="fill-opacity"
            />
          </circle>
        </g>
        <g transform="translate(59.889 80.434) rotate(72)">
          <circle fillOpacity={0.8} fill="#8b5cf6" r={6 * (svgSize / 100)}>
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.48 1.48;1 1"
              begin="-0.7s"
              type="scale"
              attributeName="transform"
            />
            <animate
              begin="-0.7s"
              values="1;0"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              attributeName="fill-opacity"
            />
          </circle>
        </g>
        <g transform="translate(40.111 80.434) rotate(108)">
          <circle fillOpacity={0.7} fill="#8b5cf6" r={6 * (svgSize / 100)}>
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.48 1.48;1 1"
              begin="-0.6s"
              type="scale"
              attributeName="transform"
            />
            <animate
              begin="-0.6s"
              values="1;0"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              attributeName="fill-opacity"
            />
          </circle>
        </g>
        <g transform="translate(24.111 68.81) rotate(144)">
          <circle fillOpacity={0.6} fill="#8b5cf6" r={6 * (svgSize / 100)}>
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.48 1.48;1 1"
              begin="-0.5s"
              type="scale"
              attributeName="transform"
            />
            <animate
              begin="-0.5s"
              values="1;0"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              attributeName="fill-opacity"
            />
          </circle>
        </g>
        <g transform="translate(18 50) rotate(180)">
          <circle fillOpacity={0.5} fill="#8b5cf6" r={6 * (svgSize / 100)}>
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.48 1.48;1 1"
              begin="-0.4s"
              type="scale"
              attributeName="transform"
            />
            <animate
              begin="-0.4s"
              values="1;0"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              attributeName="fill-opacity"
            />
          </circle>
        </g>
        <g transform="translate(24.111 31.19) rotate(216)">
          <circle fillOpacity={0.4} fill="#8b5cf6" r={6 * (svgSize / 100)}>
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.48 1.48;1 1"
              begin="-0.3s"
              type="scale"
              attributeName="transform"
            />
            <animate
              begin="-0.3s"
              values="1;0"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              attributeName="fill-opacity"
            />
          </circle>
        </g>
        <g transform="translate(40.111 19.566) rotate(252)">
          <circle fillOpacity={0.3} fill="#8b5cf6" r={6 * (svgSize / 100)}>
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.48 1.48;1 1"
              begin="-0.2s"
              type="scale"
              attributeName="transform"
            />
            <animate
              begin="-0.2s"
              values="1;0"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              attributeName="fill-opacity"
            />
          </circle>
        </g>
        <g transform="translate(59.889 19.566) rotate(288)">
          <circle fillOpacity={0.2} fill="#8b5cf6" r={6 * (svgSize / 100)}>
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.48 1.48;1 1"
              begin="-0.1s"
              type="scale"
              attributeName="transform"
            />
            <animate
              begin="-0.1s"
              values="1;0"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              attributeName="fill-opacity"
            />
          </circle>
        </g>
        <g transform="translate(75.889 31.19) rotate(324)">
          <circle fillOpacity={0.1} fill="#8b5cf6" r={6 * (svgSize / 100)}>
            <animateTransform
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="1.48 1.48;1 1"
              begin="0s"
              type="scale"
              attributeName="transform"
            />
            <animate
              begin="0s"
              values="1;0"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              attributeName="fill-opacity"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}

export default Loader;
