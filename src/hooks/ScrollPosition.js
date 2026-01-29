import { useEffect, useState } from "react";

export function ScrollPosition() {
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    function changeBackGround() {
      if (window.scrollY >= 540) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    }

    window.addEventListener("scroll", changeBackGround);

    return () => {
      window.removeEventListener("scroll", changeBackGround);
    };
  }, []);

  return navBar;
}

