import { useEffect, useState } from "react";
import "../styles/cursor.css";

const contStyle = {
  fontSize: "1px",
  width: "40em",
  height: "40em",
  position: "relative",
  pointerEvents: "none",
  zIndex: "-1",
};

const sunStyle = {
  position: "absolute",
  top: "15em",
  left: "15em",
  width: "10em",
  height: "10em",
  borderRadius: "50%",
  backgroundColor: "#FFCC33",
  boxShadow: "0 0 3em white",
};

const emStyle = {
  position: "absolute",
  borderStyle: "solid",
  borderColor: "white transparent transparent transparent",
  borderWidth: "0.1em 0.1em 0 0",
  borderRadius: "50%",
};

const earthStyle = {
  ...emStyle,
  top: "5em",
  left: "5em",
  width: "30em",
  height: "30em",
  animation: "nb 3s infinite linear",
};

// const moonStyle = {
//   ...emStyle,
//   top: "0",
//   right: "0",
//   width: "8em",
//   height: "8em",
//   animation: "nb 3s infinite linear",
// };

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isResized, setIsResized] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResized) {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    const handleResize = () => {
      setIsResized(false);
      setPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
      setIsResized(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isResized]);

  return (
    <div className="w-full h-full absolute z-50 pointer-events-none">
      <div
        className="cont"
        style={{
          ...contStyle,
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="sun" style={sunStyle}></div>
        <div className="earth" style={earthStyle}>
          {/* <div className="moon" style={moonStyle}></div> */}
        </div>
      </div>
    </div>
  );
}

export default CustomCursor;
