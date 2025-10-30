import { ReactNode } from "react";

interface DisplaySlideProps {
  children: ReactNode;
  isActive: boolean;
}

export const DisplaySlide = ({ children, isActive }: DisplaySlideProps) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      {children}
    </div>
  );
};
