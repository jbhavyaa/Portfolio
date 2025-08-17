import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightBoxProps {
  children: ReactNode;
  className?: string;
}

const SpotlightBox = ({ children, className }: SpotlightBoxProps) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={cn("spotlight-box fade-in p-8 md:p-12", className)}
    >
      {children}
    </div>
  );
};

export default SpotlightBox;
