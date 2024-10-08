import { useEffect, useState } from "react";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}
