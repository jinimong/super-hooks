import { useRef } from "react";

export const useFullscreen = () => {
  const element = useRef();
  const triggerFullscreen = () => {
    if (element.current) {
      element.current.webkitRequestFullScreen();
    }
  };
  return { element, triggerFullscreen };
};
