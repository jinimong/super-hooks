export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    throw Error("You should set resolver callback function.");
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      if (onCancel && typeof onCancel === "function") {
        onCancel();
      }
    }
  };
  return confirmAction;
};
