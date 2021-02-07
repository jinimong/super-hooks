import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", onBefore);
    return () => document.removeEventListener("mouseleave", onBefore);
  }, [onBefore]);
};
