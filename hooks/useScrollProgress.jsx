import { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updataSrcollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };
    window.addEventListener("scroll", updataSrcollCompletion);
    return () => window.removeEventListener("scroll", updataSrcollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
