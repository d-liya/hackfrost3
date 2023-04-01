import React, { useEffect, useState } from "react";

function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(null);

  useEffect(() => {
    function handleScroll(e) {
      const now = Date.now();
      const deltaY = e.deltaY;
      const deltaYSign = Math.sign(deltaY);

      if (lastScrollTime && now - lastScrollTime < 50) {
        const distance = deltaY - lastScrollY;
        const speed = Math.abs(distance) / (now - lastScrollTime);
        setVelocity(deltaYSign * speed);
      }

      setLastScrollTime(now);
      setLastScrollY(deltaY);
    }

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [lastScrollTime, lastScrollY]);

  return velocity;
}

export default useScrollVelocity;
