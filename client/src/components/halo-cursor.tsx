import { useEffect, useState } from "react";

interface HaloCursorProps {
  targetSection?: string;
}

const HaloCursor = ({ targetSection = "intro" }: HaloCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const targetElement = document.getElementById(targetSection);
      if (!targetElement) return;

      const rect = targetElement.getBoundingClientRect();
      const isInTarget =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInTarget) {
        setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [targetSection]);

  return (
    <div
      className={`halo-cursor ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default HaloCursor;
