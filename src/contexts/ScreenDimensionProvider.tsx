"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ScreenDimensions {
  width: number;
  height: number;
}

const ScreenDimensionsContext = createContext<ScreenDimensions | undefined>(
  undefined
);

interface ScreenDimensionsProviderProps {
  children: ReactNode;
}

export const ScreenDimensionsProvider: React.FC<
  ScreenDimensionsProviderProps
> = ({ children }) => {
  const [dimensions, setDimensions] = useState<ScreenDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <ScreenDimensionsContext.Provider value={dimensions}>
      {children}
    </ScreenDimensionsContext.Provider>
  );
};

export const useScreenDimensions = (): ScreenDimensions => {
  const context = useContext(ScreenDimensionsContext);
  if (context === undefined) {
    throw new Error("must be used within a ScreenDimensionsProvider");
  }
  return context;
};
